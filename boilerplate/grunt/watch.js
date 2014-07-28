module.exports = {

    options : {
        livereload : true
    },

    gruntfile : {
        files : ['gruntfile.js', 'grunt/**/**'],
        tasks : ['build']
    },

    js : {
        files : ['public/js/**/**.js']
    },

    sass : {
        files : ['public/css/**/**.scss'],
        tasks : ['sass']
    }

};
