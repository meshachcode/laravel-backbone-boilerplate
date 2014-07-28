define([
    'backbone.marionette'
], function (
    Marionette
) {
    return Marionette.AppRouter.extend({

        constructor: function(options) {
            if ( ! _.isUndefined(options.controller)) {
                this.controller = options.controller;

                if ( ! _.isUndefined(this.controller.app)) {
                    this.app = this.controller.app;
                }
            }

            // Trim slashes off urls from larotue
            _.each(this.routes, function (url, method, list) {
                list[method] = _.trim(url, '/');
            });

            // Invert the routes, since Marionette uses routes { url : method }        
            this.routes = _.invert(this.routes);

            Marionette.AppRouter.prototype.constructor.call(this, options);
        }

    });
});
