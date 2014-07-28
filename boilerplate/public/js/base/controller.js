define([
	'backbone.marionette'
], function (
    Marionette
) {
    return Marionette.Controller.extend({

        constructor : function (options) {
            if ( ! _.isUndefined(options.app)) {
                this.app = options.app;
            }  

            Marionette.Controller.prototype.constructor.call(this, options);
        },
        
        show : function (view, region, options) {
            // Future proof
            region.show(view);
        }

    });
});