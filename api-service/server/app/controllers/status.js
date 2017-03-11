/*!
 * Sample App Service
 * -------------------------------------
 * Controller [status].
 */

'use strict';

var os = require('os'),
    pkg = require('../../package.json');


/////////////////////////////////////////////
//  Public functions
/////////////////////////////////////////////

var getStatus = function(req, res) {

    //////////////////////////////////////
    //  Compute our metrics
    //////////////////////////////////////

    var v8Mem = process.memoryUsage();
    var v8FreeMem = v8Mem.heapTotal - v8Mem.heapUsed;
    var v8FreeMemUtil = 100 * v8FreeMem / v8Mem.heapTotal;

    var totalMem = os.totalmem();
    var freeMem = os.freemem();

    var freeMemUtil = 100 * freeMem / totalMem;

    //  Determine the number of current connections
    var server = req.socket ? req.socket.server : undefined;
    getCurrentConnections(server, function(err, count) {
        if (err) {
            //  Not fatal -- set count to 0
            count = 0;
        }

        //////////////////////////////////////
        //  Now format our response object
        //////////////////////////////////////

        var status = 200;

        var statusObject = {
            "Status" : {
                "Name": pkg.name,
                "Description": pkg.description,
                "Version": pkg.version,
                "NodeVersion": process.version,
                "Environment": process.env.NODE_ENV,
                "Memory": {
                    "FreeMem %" : Math.round(100 * freeMemUtil) / 100,
                    "TotalMem (MB)" : Math.round(totalMem / ( 1024 * 1024 )),
                    "V8 FreeMem %" : Math.round(100 * v8FreeMemUtil) / 100
                },
                "Process": {
                    "Pid": process.pid,
                    "Uptime (ticks)": process.uptime()
                },
                "Connections": {
                    "Count" : count
                }
            }
        };

        //  output result to client
        res.format({
            json: function() {
                res.status(status).send(statusObject);
            }
        });
    });

};


/////////////////////////////////////////////
//  Private Functions
/////////////////////////////////////////////

var getCurrentConnections = function(server, callback) {

    if (!server || typeof server.getConnections !== 'function') {
        //  Unable to determine current connection count - so simply return 0 on next tick
        return process.nextTick(function() { return callback(null, 0); });
    }

    server.getConnections(callback);

};


/////////////////////////////////////////////
//  Exports
/////////////////////////////////////////////

exports.getStatus = getStatus;
