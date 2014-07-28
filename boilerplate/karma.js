tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
      if (/_spec\.js$/.test(file)) {
            tests.push(file);
          }
    }
}

require.config({
    baseUrl: '/base/public/js',

    deps: tests,

    paths: {
        'backbone': '../vendor/backbone/backbone',
        'backbone.babysitter': '../vendor/backbone.babysitter/lib/backbone.babysitter',
        'backbone.marionette': '../vendor/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../vendor/backbone.wreqr/lib/backbone.wreqr',
        'jquery': '../vendor/jquery/dist/jquery',
        'laroute': '../vendor/laroute/laroute',
        'requirejs-text': '../vendor/requirejs-text/text',
        'underscore': '../vendor/underscore/underscore'
    },

    shim: {
        'underscore': {
            deps: [
                'laroute'
            ]
        }
    },

    callback: window.__karma__.start

});
