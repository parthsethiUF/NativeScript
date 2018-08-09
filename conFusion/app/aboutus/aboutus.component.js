"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(leaderService, baseURL) {
        this.leaderService = leaderService;
        this.baseURL = baseURL;
    }
    AboutusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutusComponent = __decorate([
        core_1.Component({
            selector: 'app-aboutus',
            moduleId: module.id,
            templateUrl: './aboutus.component.html',
            styleUrls: ['./aboutus.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService, Object])
    ], AboutusComponent);
    return AboutusComponent;
}());
exports.AboutusComponent = AboutusComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCw2REFBMkQ7QUFTM0Q7SUFLSSwwQkFDWSxhQUE0QixFQUNULE9BQU87UUFEMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQUksQ0FBQztJQUUzQyxtQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFDeEMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFRLE9BQU8sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFiUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7UUFTTyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FESyw4QkFBYTtPQU4vQixnQkFBZ0IsQ0FlNUI7SUFBRCx1QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1hYm91dHVzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hYm91dHVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hYm91dHVzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFib3V0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIGxlYWRlcnM6IExlYWRlcltdO1xuICAgIGVyck1lc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGxlYWRlclNlcnZpY2U6IExlYWRlclNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGVhZGVyU2VydmljZS5nZXRMZWFkZXJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobGVhZGVycyA9PiB0aGlzLmxlYWRlcnMgPSBsZWFkZXJzLFxuICAgICAgICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcbiAgICB9XG5cbn0iXX0=