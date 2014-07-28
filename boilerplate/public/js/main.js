require.config({
    paths : {
        'backbone' : '../vendor/backbone/backbone',
        'backbone.babysitter' : '../vendor/backbone.babysitter/lib/backbone.babysitter',
        'backbone.marionette' : '../vendor/marionette/lib/core/backbone.marionette',
        'backbone.wreqr' : '../vendor/backbone.wreqr/lib/backbone.wreqr',
        'jquery' : '../vendor/jquery/dist/jquery',
        'laroute' : '../vendor/laroute/laroute',
        'requirejs-text' : '../vendor/requirejs-text/text',
        'underscore' : '../vendor/underscore/underscore'
    },

    shim : {
        'underscore' : {
            deps : [
                'laroute'
            ]
        }
    },
});

require([
	'app'
], function (
	App
) {
	App.start();
});