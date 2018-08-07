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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxrRUFBMkY7QUFDM0Ysa0VBQXFFO0FBR3JFLHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsNENBQTJDO0FBQzNDLDJEQUE2QztBQUM3QyxzQ0FBb0M7QUFRcEM7SUFTSSw2QkFBb0IsV0FBd0IsRUFDaEMsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLFFBQTRCLEVBQzVCLEtBQXVCLEVBQ3ZCLFlBQWdDLEVBQ2IsT0FBTztRQVBsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBVHRDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFTZ0IsQ0FBQztJQUUzQyxzQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDWixJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDeEUsRUFEbUMsQ0FDbkMsQ0FBQyxDQUFDO2FBQ0YsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNmLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxL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QUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO1FBaUJPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQVBXLDBCQUFXO1lBQ3pCLHVCQUFjO1lBQ0gseUJBQWdCO1lBQ2pCLGtDQUFlO1lBQ3RCLDhDQUFrQjtZQUNyQix1QkFBZ0I7WUFDVCxpQ0FBa0I7T0FmbkMsbUJBQW1CLENBK0UvQjtJQUFELDBCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBDb21tZW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gXCIuLi9zaGFyZWQvZGlzaFwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21tZW50XCI7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Rpc2guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAndWkvZGlhbG9ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Rpc2hkZXRhaWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXNoZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBkaXNoOiBEaXNoO1xyXG4gICAgY29tbWVudDogQ29tbWVudDtcclxuICAgIGVyck1lc3M6IHN0cmluZztcclxuICAgIGF2Z3N0YXJzOiBzdHJpbmc7XHJcbiAgICBudW1jb21tZW50czogbnVtYmVyO1xyXG4gICAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hTZXJ2aWNlOiBEaXNoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hTZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddXHJcbiAgICAgICAgICAgICkpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRpc2ggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2ggPSBkaXNoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwgLyB0aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkFjdGlvbkRpYWxvZyhhcmdzKSB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJXaGF0IGFyZSB5b3UgZ29pbmcgdG8gZG8/XCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkFkZCB0byBGYXZvcml0ZXNcIiwgXCJBZGQgYSBDb21tZW50XCJdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKGFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MgPT0gXCJBZGQgdG8gRmF2b3JpdGVzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9GYXZvcml0ZXMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzID09IFwiQWRkIGEgQ29tbWVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGluZyBhIGNvbW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9GYXZvcml0ZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgdG8gRmF2b3JpdGVzJywgdGhpcy5kaXNoLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmFkZEZhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIkFkZGVkIERpc2ggXCIgKyB0aGlzLmRpc2guaWQsIFwic2hvcnRcIiwgXCJib3R0b21cIik7XHJcbiAgICAgICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9kYWxWaWV3KCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcbn0iXX0=