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
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var enums = require("ui/enums");
var SocialShare = require("nativescript-social-share");
var image_source_1 = require("image-source");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishService, route, routerExtensions, favoriteservice, fonticon, vcRef, modalService, page, baseURL) {
        this.dishService = dishService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.vcRef = vcRef;
        this.modalService = modalService;
        this.page = page;
        this.baseURL = baseURL;
        this.favorite = false;
        this.showComments = false;
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
    DishdetailComponent.prototype.socialShare = function () {
        var image;
        image_source_1.fromUrl(this.baseURL + this.dish.image)
            .then(function (img) {
            image = img;
            SocialShare.shareImage(image, "How would you like to share this image?");
        })
            .catch(function () { console.log('Error loading image'); });
    };
    DishdetailComponent.prototype.openActionDialog = function (args) {
        var _this = this;
        var options = {
            title: "Action",
            message: "What are you going to do?",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add a Comment", "Social Sharing"]
        };
        dialogs_1.action(options).then(function (args) {
            if (args == "Add to Favorites") {
                _this.addToFavorites();
            }
            else if (args == "Add a Comment") {
                console.log("adding a comment");
                _this.createModalView();
            }
            else if (args === 'Social Sharing') {
                _this.socialShare();
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
    DishdetailComponent.prototype.onSwipe = function (args) {
        if (this.dish) {
            this.cardImage = this.page.getViewById("cardImage");
            this.cardLayout = this.page.getViewById("cardLayout");
            this.commentList = this.page.getViewById("commentList");
            if (args.direction === gestures_1.SwipeDirection.up && !this.showComments) {
                this.animateUp();
            }
            else if (args.direction === gestures_1.SwipeDirection.down && this.showComments) {
                this.showComments = false;
                this.animateDown();
            }
        }
    };
    DishdetailComponent.prototype.showAndHideComments = function () {
        this.cardImage = this.page.getViewById("cardImage");
        this.cardLayout = this.page.getViewById("cardLayout");
        this.commentList = this.page.getViewById("commentList");
        if (!this.showComments) {
            this.animateUp();
        }
        else if (this.showComments) {
            this.showComments = false;
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.animateUp = function () {
        var _this = this;
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 0 },
            translate: { x: 0, y: -200 },
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffc107"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            _this.showComments = true;
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent.prototype.animateDown = function () {
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffffff"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.css']
        }),
        __param(8, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            core_1.ViewContainerRef,
            modal_dialog_1.ModalDialogService,
            page_1.Page, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxrRUFBMkY7QUFDM0Ysa0VBQXFFO0FBR3JFLHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsNENBQTJDO0FBQzNDLDJEQUE2QztBQUM3QyxzQ0FBb0M7QUFFcEMsZ0NBQStCO0FBQy9CLDBDQUE4RDtBQUU5RCx3Q0FBb0U7QUFDcEUsK0JBQThCO0FBQzlCLGdDQUFrQztBQUVsQyx1REFBeUQ7QUFDekQsNkNBQW9EO0FBUXBEO0lBZ0JJLDZCQUFvQixXQUF3QixFQUNoQyxLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsUUFBNEIsRUFDNUIsS0FBdUIsRUFDdkIsWUFBZ0MsRUFDaEMsSUFBVSxFQUNTLE9BQU87UUFSbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQU07UUFDUyxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBakJ0QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBY1ksQ0FBQztJQUUzQyxzQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDWixJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FB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bUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgQ29tbWVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSBcIi4uL3NoYXJlZC9kaXNoXCI7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21tZW50XCI7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd1aS9kaWFsb2dzJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tIFwidWkvZW51bXNcIjtcblxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tVXJsIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaXNoZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGRpc2g6IERpc2g7XG4gICAgY29tbWVudDogQ29tbWVudDtcbiAgICBlcnJNZXNzOiBzdHJpbmc7XG4gICAgYXZnc3RhcnM6IHN0cmluZztcbiAgICBudW1jb21tZW50czogbnVtYmVyO1xuICAgIGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIHNob3dDb21tZW50czogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY2FyZEltYWdlOiBWaWV3O1xuICAgIGNvbW1lbnRMaXN0OiBWaWV3O1xuICAgIGNhcmRMYXlvdXQ6IFZpZXc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hTZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxuICAgICAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hTZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddXG4gICAgICAgICAgICApKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGlzaCA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc2ggPSBkaXNoO1xuICAgICAgICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5pc0Zhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwgLyB0aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHsgdGhpcy5kaXNoID0gbnVsbDsgdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzOyB9KTtcbiAgICB9XG5cbiAgICBzb2NpYWxTaGFyZSgpIHtcbiAgICAgICAgbGV0IGltYWdlOiBJbWFnZVNvdXJjZTtcblxuICAgICAgICBmcm9tVXJsKHRoaXMuYmFzZVVSTCArIHRoaXMuZGlzaC5pbWFnZSlcbiAgICAgICAgICAgIC50aGVuKChpbWc6IEltYWdlU291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBpbWc7XG4gICAgICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVJbWFnZShpbWFnZSwgXCJIb3cgd291bGQgeW91IGxpa2UgdG8gc2hhcmUgdGhpcyBpbWFnZT9cIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4geyBjb25zb2xlLmxvZygnRXJyb3IgbG9hZGluZyBpbWFnZScpOyB9KTtcblxuICAgIH1cblxuICAgIG9wZW5BY3Rpb25EaWFsb2coYXJncykge1xuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiQWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIldoYXQgYXJlIHlvdSBnb2luZyB0byBkbz9cIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJBZGQgdG8gRmF2b3JpdGVzXCIsIFwiQWRkIGEgQ29tbWVudFwiLCBcIlNvY2lhbCBTaGFyaW5nXCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmIChhcmdzID09IFwiQWRkIHRvIEZhdm9yaXRlc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzID09IFwiQWRkIGEgQ29tbWVudFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgYSBjb21tZW50XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kYWxWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSAnU29jaWFsIFNoYXJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxTaGFyZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRUb0Zhdm9yaXRlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIkFkZGVkIERpc2ggXCIgKyB0aGlzLmRpc2guaWQsIFwic2hvcnRcIiwgXCJib3R0b21cIik7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbFZpZXcoKSB7XG5cbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzaCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkSW1hZ2UgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkSW1hZ2VcIik7XG4gICAgICAgICAgICB0aGlzLmNhcmRMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkTGF5b3V0XCIpO1xuICAgICAgICAgICAgdGhpcy5jb21tZW50TGlzdCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNvbW1lbnRMaXN0XCIpO1xuXG4gICAgICAgICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnVwICYmICF0aGlzLnNob3dDb21tZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24uZG93biAmJiB0aGlzLnNob3dDb21tZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgc2hvd0FuZEhpZGVDb21tZW50cygpIHtcbiAgICAgICAgdGhpcy5jYXJkSW1hZ2UgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkSW1hZ2VcIik7XG4gICAgICAgIHRoaXMuY2FyZExheW91dCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRMYXlvdXRcIik7XG4gICAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcblxuICAgICAgICBpZiAoIXRoaXMuc2hvd0NvbW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVVcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd0NvbW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb21tZW50cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZVVwKCkge1xuICAgICAgICBsZXQgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcbiAgICAgICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMjAwIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICAgICAgfTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XG5cbiAgICAgICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNmZmMxMDdcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgICAgICB9O1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgICAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICAgICAgYW5pbWF0aW9uU2V0LnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmltYXRlRG93bigpIHtcbiAgICAgICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5jYXJkSW1hZ2UsXG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5jYXJkTGF5b3V0LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICAgICAgfTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG5cbiAgICAgICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSBcblxufSJdfQ==