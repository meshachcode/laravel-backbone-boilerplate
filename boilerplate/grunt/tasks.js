module.exports = function(grunt) {

    grunt.registerTask('build', ['sass']);

    grunt.registerTask('release', ['sprite', 'build', 'modernizr', 'requirejs', 'uglify']);

    grunt.registerTask('default', ['build', 'watch']);
    
};
