define([
    'backbone.marionette',
    'base/router',
    'base/controller',
    'apps/home/index/controller'
], function (
    Marionette,
    BaseRouter,
    BaseController,
    IndexController
) {
    var Router = BaseRouter.extend({

        routes : {
            'index' : laroute.route('home.index')
        },

        index : function () {
            this.controller.index();
        }

    });

    var Controller = BaseController.extend({

        index : function (options) {
            options = _.defaults(options || {}, {
                region : this.app.mainRegion
            });

            return new IndexController(options);
        }

    });

    return /*App.addInitializer*/function () {
        var controller = new Controller({
            app : this
        });

        this.router = new Router({
            controller : controller
        });
    };
});
