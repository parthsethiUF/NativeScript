"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var comment_component_1 = require("../comment/comment.component");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var nativescript_toasty_1 = require("nativescript-toasty");
var dialogs_1 = require("ui/dialogs");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishService, route, routerExtensions, favoriteservice, fonticon, vcRef, modalService, baseURL) {
        this.dishService = dishService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.vcRef = vcRef;
        this.modalService = modalService;
        this.baseURL = baseURL;
        this.favorite = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.switchMap(function (params) { return _this.dishService.getDish(params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.openActionDialog = function (args) {
        var _this = this;
        var options = {
            title: "Action",
            message: "What are you going to do?",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add a Comment"]
        };
        dialogs_1.action(options).then(function (args) {
            if (args == "Add to Favorites") {
                _this.addToFavorites();
            }
            else if (args == "Add a Comment") {
                console.log("adding a comment");
                _this.createModalView();
            }
        });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            var toast = new nativescript_toasty_1.Toasty("Added Dish " + this.dish.id, "short", "bottom");
            toast.show();
        }
    };
    DishdetailComponent.prototype.createModalView = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(comment_component_1.CommentModalComponent, options)
            .then(function (result) {
            _this.dish.comments.push(result);
        });
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.css']
        }),
        __param(7, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            core_1.ViewContainerRef,
            modal_dialog_1.ModalDialogService, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxrRUFBMkY7QUFDM0Ysa0VBQXFFO0FBR3JFLHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsNENBQTJDO0FBQzNDLDJEQUE2QztBQUM3QyxzQ0FBb0M7QUFRcEM7SUFTSSw2QkFBb0IsV0FBd0IsRUFDaEMsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLFFBQTRCLEVBQzVCLEtBQXVCLEVBQ3ZCLFlBQWdDLEVBQ2IsT0FBTztRQVBsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBVHRDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFTZ0IsQ0FBQztJQUUzQyxzQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDWixJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDeEUsRUFEbUMsQ0FDbkMsQ0FBQyxDQUFDO2FBQ0YsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNmLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxL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QUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO1FBaUJPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQVBXLDBCQUFXO1lBQ3pCLHVCQUFjO1lBQ0gseUJBQWdCO1lBQ2pCLGtDQUFlO1lBQ3RCLDhDQUFrQjtZQUNyQix1QkFBZ0I7WUFDVCxpQ0FBa0I7T0FmbkMsbUJBQW1CLENBK0UvQjtJQUFELDBCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IENvbW1lbnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gXCIuLi9zaGFyZWQvZGlzaFwiO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuLi9zaGFyZWQvY29tbWVudFwiO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Rpc2hkZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpc2hkZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZGlzaDogRGlzaDtcbiAgICBjb21tZW50OiBDb21tZW50O1xuICAgIGVyck1lc3M6IHN0cmluZztcbiAgICBhdmdzdGFyczogc3RyaW5nO1xuICAgIG51bWNvbW1lbnRzOiBudW1iZXI7XG4gICAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaFNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaFNlcnZpY2UuZ2V0RGlzaChwYXJhbXNbJ2lkJ11cbiAgICAgICAgICAgICkpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkaXNoID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzaCA9IGRpc2g7XG4gICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbCAvIHRoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm1lc3MgPT4geyB0aGlzLmRpc2ggPSBudWxsOyB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3M7IH0pO1xuICAgIH1cblxuICAgIG9wZW5BY3Rpb25EaWFsb2coYXJncykge1xuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiQWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIldoYXQgYXJlIHlvdSBnb2luZyB0byBkbz9cIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJBZGQgdG8gRmF2b3JpdGVzXCIsIFwiQWRkIGEgQ29tbWVudFwiXVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChhcmdzKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJncyA9PSBcIkFkZCB0byBGYXZvcml0ZXNcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9GYXZvcml0ZXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncyA9PSBcIkFkZCBhIENvbW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIGEgY29tbWVudFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsVmlldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRUb0Zhdm9yaXRlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIkFkZGVkIERpc2ggXCIgKyB0aGlzLmRpc2guaWQsIFwic2hvcnRcIiwgXCJib3R0b21cIik7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbFZpZXcoKSB7XG5cbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn0iXX0=