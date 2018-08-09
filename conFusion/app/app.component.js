"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions, fonticon) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/menu";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: "Login",
            message: 'Type Your Login Credentials',
            userName: application_settings_1.getString("userName", ""),
            password: application_settings_1.getString("password", ""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        };
        dialogs_1.login(options)
            .then(function (loginResult) {
            application_settings_1.setString("userName", loginResult.userName);
            application_settings_1.setString("password", loginResult.password);
        }, function () {
            console.log('Login cancelled');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXdEO0FBQ3hELGlDQUFtQztBQUNuQyxzREFBK0Q7QUFDL0QseUVBQXlHO0FBQ3pHLDRDQUF3QztBQUN4Qyx1RUFBK0Q7QUFDL0Qsc0NBQWdEO0FBQ2hELDZEQUE0RDtBQU01RDtJQUlJLHNCQUFvQixNQUFjLEVBQ3RCLGdCQUFrQyxFQUNsQyxRQUE0QjtRQUZwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDcEMsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNiLElBQUksQ0FBQyxrQkFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsQ0FBQzthQUM1RCxTQUFTLENBQUMsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsc0JBQUksOENBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELDBDQUFtQixHQUFuQixVQUFvQixHQUFXO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLFlBQW9CO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxRQUFRLEVBQUUsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDbkMsWUFBWSxFQUFFLE9BQU87WUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFBO1FBRUQsZUFBSyxDQUFDLE9BQU8sQ0FBQzthQUNULElBQUksQ0FBQyxVQUFDLFdBQXdCO1lBQzNCLGdDQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUNHO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQXhEUSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBSzhCLGVBQU07WUFDSix5QkFBZ0I7WUFDeEIsOENBQWtCO09BTi9CLFlBQVksQ0F5RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgUmFkU2lkZURyYXdlciwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IGxvZ2luLCBMb2dpblJlc3VsdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2FjdGl2YXRlZFVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gXCIvbWVudVwiO1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy5fYWN0aXZhdGVkVXJsID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBpc0NvbXBvbmVudFNlbGVjdGVkKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgICB9XG5cbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheUxvZ2luRGlhbG9nKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVHlwZSBZb3VyIExvZ2luIENyZWRlbnRpYWxzJyxcbiAgICAgICAgICAgIHVzZXJOYW1lOiBnZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCBcIlwiKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBnZXRTdHJpbmcoXCJwYXNzd29yZFwiLCBcIlwiKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9XG5cbiAgICAgICAgbG9naW4ob3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChsb2dpblJlc3VsdDogTG9naW5SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCBsb2dpblJlc3VsdC51c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgbG9naW5SZXN1bHQucGFzc3dvcmQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59Il19