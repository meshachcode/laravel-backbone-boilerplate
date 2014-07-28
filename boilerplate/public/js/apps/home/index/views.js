define([
    'app',
    'requirejs-text!apps/home/index/templates/layout.html'
], function (
    App,
    layoutTemplate
) {
    var Views = {};
    
    Views.Layout = Marionette.LayoutView.extend({

    	className : 'welcome',

        template : _.template(layoutTemplate)

    });

    return Views;
});
