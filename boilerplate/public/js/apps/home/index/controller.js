define([
    'backbone.marionette',
    'base/controller',
    'apps/home/index/views'
], function (
    Marionette,
    BaseController,
    Views
) {
    return BaseController.extend({

        initialize : function (options) {
            this.region = options.region;

            this.layout = new Views.Layout();

            this.show(this.layout, this.region);
        }

    });
});
