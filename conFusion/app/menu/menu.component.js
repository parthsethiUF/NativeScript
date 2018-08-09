"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var app = require("application");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, baseURL) {
        this.dishService = dishService;
        this.baseURL = baseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, Object])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsaUNBQW1DO0FBU25DO0lBS0ksdUJBQW9CLFdBQXdCLEVBQ2IsT0FBTztRQURsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNiLFlBQU8sR0FBUCxPQUFPLENBQUE7SUFBSSxDQUFDO0lBRTNDLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUNyQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFqQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQztRQU9PLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURXLDBCQUFXO09BTG5DLGFBQWEsQ0FrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1tZW51JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGRpc2hlczogRGlzaFtdO1xuICAgIGVyck1lc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaFNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRpc2hTZXJ2aWNlLmdldERpc2hlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRpc2hlcyA9PiB0aGlzLmRpc2hlcyA9IGRpc2hlcyxcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufSJdfQ==