/*!
 * Sample App Client
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
                'assets/js/**/*.js',
                'src/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', ['jshint']);

    // Default task.
    grunt.registerTask('default', ['build']);

};
