/*!
 * Sample App Service
 * ----------------------------
 * Errors.
 */

'use strict';

var http = require('http'),
    util = require('util');


// * ----------------------------
// Base errors.  All custom errors inherit off one of these.
// * ----------------------------

function UncheckedError(msg, constructor) {
    Error.captureStackTrace(this, constructor || this);
    this.message = msg || 'Error';
}
util.inherits(UncheckedError, Error);
UncheckedError.prototype.name = 'UncheckedError';


function CheckedError(msg) {
    this.message = msg || 'Error';
}
util.inherits(CheckedError, Error);
CheckedError.prototype.name = 'CheckedError';


// * ----------------------------
//  Application-level errors.
// * ----------------------------

function Internal(msg, details) {
    Internal.super_.call(this, msg, this.constructor);
    this.details = details || {};
}
util.inherits(Internal, UncheckedError);
Internal.prototype.name = 'Internal';


function AuthFailure(msg) {
    AuthFailure.super_.call(this, msg);
}
util.inherits(AuthFailure, CheckedError);
AuthFailure.prototype.name = 'AuthFailure';


function InvalidArg(msg) {
    InvalidArg.super_.call(this, msg);
}
util.inherits(InvalidArg, CheckedError);
InvalidArg.prototype.name = 'InvalidArg';


// * ----------------------------
//  API-specific errors
//  These map to HTTP failure codes
// * ----------------------------

function ApiError(status) {
    var msg = http.STATUS_CODES[status] || '';
    ApiError.super_.call(this, msg);
    this.status = status;
}
util.inherits(ApiError, CheckedError);
ApiError.prototype.name = 'ApiError';


function BadRequest(details) {
    BadRequest.super_.call(this, 400);
    this.details = details || '';
}
util.inherits(BadRequest, ApiError);
BadRequest.prototype.name = 'Bad request';


function Unauthorized(err) {
    Unauthorized.super_.call(this, 401);
    this.details = err;
}
util.inherits(Unauthorized, ApiError);
Unauthorized.prototype.name = 'Unauthorized';


function Forbidden(details) {
    Forbidden.super_.call(this, 403);
    this.details = details || '';
}
util.inherits(Forbidden, ApiError);
Forbidden.prototype.name = 'Forbidden';


function NotFound(path) {
    NotFound.super_.call(this, 404);
    this.details = path ? 'Cannot find ' + path : '';
}
util.inherits(NotFound, ApiError);
NotFound.prototype.name = 'Not found';


function ServerFailure(err) {
    ServerFailure.super_.call(this, 500);
    this.details = err;
}
util.inherits(ServerFailure, ApiError);
ServerFailure.prototype.name = 'Server failure';


/////////////////////////////////////////////
//  Exports
/////////////////////////////////////////////

module.exports = {
    Internal: Internal,
    AuthFailure: AuthFailure,
    InvalidArg: InvalidArg,
    BadRequest: BadRequest,
    NotFound: NotFound,
    Unauthorized: Unauthorized,
    Forbidden: Forbidden,
    ServerFailure: ServerFailure
};
