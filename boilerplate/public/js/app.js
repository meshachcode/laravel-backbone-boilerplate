define([
	'backbone.marionette',
	'apps/home/app',
	'mixins/underscore'
], function (
	Marionette,
	HomeApp
) {
	var App = new Marionette.Application();

	App.addRegions({
		mainRegion : '.js-region-main'
	});

	App.addInitializer(HomeApp);

	App.on('start', function () {
        Backbone.history.start({
            pushState : true
        }); 
    });

	return App;
});