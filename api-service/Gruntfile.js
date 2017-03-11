/*!
 * Sample App Service
 * ----------------------------
 * Gruntfile.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            files: [
                'Gruntfile.js',
                'server/*.js',
                'server/app/controllers/**/*.js',
                'server/lib/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', ['jshint']);

    // Default task.
    grunt.registerTask('default', ['build']);

};
