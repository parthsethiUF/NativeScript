"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var app = require("application");
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
    AboutusComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCw2REFBMkQ7QUFDM0QsaUNBQW1DO0FBU25DO0lBS0ksMEJBQ1ksYUFBNEIsRUFDVCxPQUFPO1FBRDFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFJLENBQUM7SUFFM0MsbUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7YUFDMUIsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQ3hDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWxCUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7UUFTTyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FESyw4QkFBYTtPQU4vQixnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWRlciB9IGZyb20gJy4uL3NoYXJlZC9sZWFkZXInO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWFib3V0dXMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0dXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Fib3V0dXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWJvdXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgbGVhZGVyczogTGVhZGVyW107XG4gICAgZXJyTWVzczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGVhZGVyU2VydmljZTogTGVhZGVyU2VydmljZSxcbiAgICAgICAgQEluamVjdCgnYmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sZWFkZXJTZXJ2aWNlLmdldExlYWRlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShsZWFkZXJzID0+IHRoaXMubGVhZGVycyA9IGxlYWRlcnMsXG4gICAgICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn0iXX0=