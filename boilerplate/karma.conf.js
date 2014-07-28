module.exports = function(config) {

    config.set({
        
        basePath: '',

        frameworks: ['jasmine', 'requirejs'],

        files: [
            'karma.js',
            {   // Vendor js
                pattern: 'public/vendor/**/*.js', 
                included: false 
            },
            {   // Application js
                pattern: 'public/js/**/*.js', 
                included: false 
            },
            {   // Applications templates
                pattern: 'public/js/**/*.html',
                included: false 
            }
            {   // Application Tests
                pattern: 'tests/public/js/**/*_spec.js',
                included: false
            },
        ],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: false

    });

};
