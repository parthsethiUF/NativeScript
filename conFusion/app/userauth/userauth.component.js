"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var camera = require("nativescript-camera");
var app = require("application");
var imagepicker = require("nativescript-imagepicker");
var UserAuthComponent = /** @class */ (function () {
    function UserAuthComponent(page, routerExtensions, formBuilder) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.tabSelectedIndex = 0;
        this.loginForm = this.formBuilder.group({
            userName: [application_settings_1.getString('userName', ''), forms_1.Validators.required],
            password: [application_settings_1.getString('password', ''), forms_1.Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            telnum: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    UserAuthComponent.prototype.ngOnInit = function () {
    };
    UserAuthComponent.prototype.takePicture = function () {
        var _this = this;
        var isAvailable = camera.isAvailable();
        if (isAvailable) {
            camera.requestPermissions();
            var options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: true };
            camera.takePicture(options)
                .then(function (imageAsset) {
                var image = _this.page.getViewById('myPicture');
                image.src = imageAsset;
            })
                .catch(function (err) { return console.log('Error -> ' + err.message); });
        }
    };
    UserAuthComponent.prototype.selectPicture = function () {
        var image = this.page.getViewById('myPicture');
        var context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                image.src = selected;
            }
            // process the selected image
            );
        }).catch(function (e) { return console.log('Error -> ' + e.message); });
    };
    UserAuthComponent.prototype.register = function () {
        this.tabSelectedIndex = 1;
    };
    UserAuthComponent.prototype.onLoginSubmit = function () {
        console.log(JSON.stringify(this.loginForm.value));
        application_settings_1.setString("userName", this.loginForm.get('userName').value);
        application_settings_1.setString("password", this.loginForm.get('password').value);
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    UserAuthComponent.prototype.onRegisterSubmit = function () {
        console.log(JSON.stringify(this.registerForm.value));
        application_settings_1.setString("userName", this.registerForm.get('userName').value);
        application_settings_1.setString("password", this.registerForm.get('password').value);
        this.loginForm.patchValue({
            'userName': this.registerForm.get('userName').value,
            'password': this.registerForm.get('password').value
        });
        this.tabSelectedIndex = 0;
    };
    UserAuthComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './userauth.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmF1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQix3Q0FBb0U7QUFDcEUsNkRBQTREO0FBQzVELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFFOUMsaUNBQW1DO0FBRW5DLHNEQUF3RDtBQU14RDtJQU1JLDJCQUFvQixJQUFVLEVBQ2xCLGdCQUFrQyxFQUNsQyxXQUF3QjtRQUZoQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKcEMscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBTXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDMUQsUUFBUSxFQUFFLENBQUMsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDN0QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBY0M7UUFiRyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVCLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1lBRXZGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2lCQUN0QixJQUFJLENBQUMsVUFBQyxVQUFVO2dCQUNiLElBQUksS0FBSyxHQUFVLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFRLFdBQVcsQ0FBQyxDQUFDO2dCQUM3RCxLQUFLLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztZQUMzQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUVMLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVEsV0FBVyxDQUFDLENBQUM7UUFDN0QsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLEVBQUUsUUFBUSxDQUFDLHdDQUF3QztTQUMxRCxDQUFDLENBQUM7UUFFSCxPQUFPO2FBQ0YsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBVSxTQUFTO1lBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUN0QixLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUV6QixDQUFDO1lBQ0csNkJBQTZCO2FBQ2hDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWxELGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXJELGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO1lBQ25ELFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO1NBQ3RELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFqR1EsaUJBQWlCO1FBSjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQU80QixXQUFJO1lBQ0EseUJBQWdCO1lBQ3JCLG1CQUFXO09BUjNCLGlCQUFpQixDQWtHN0I7SUFBRCx3QkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndWkvaW1hZ2UnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyYXV0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gICAgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB1c2VyTmFtZTogW2dldFN0cmluZygndXNlck5hbWUnLCAnJyksIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFtnZXRTdHJpbmcoJ3Bhc3N3b3JkJywgJycpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICB1c2VyTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgdGVsbnVtOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIHRha2VQaWN0dXJlKCkge1xuICAgICAgICBsZXQgaXNBdmFpbGFibGUgPSBjYW1lcmEuaXNBdmFpbGFibGUoKTtcbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGtlZXBBc3BlY3RSYXRpbzogZmFsc2UsIHNhdmVUb0dhbGxlcnk6IHRydWUgfTtcblxuICAgICAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gPEltYWdlPnRoaXMucGFnZS5nZXRWaWV3QnlJZDxJbWFnZT4oJ215UGljdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKCdFcnJvciAtPiAnICsgZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2VsZWN0UGljdHVyZSgpIHtcbiAgICAgICAgbGV0IGltYWdlID0gPEltYWdlPnRoaXMucGFnZS5nZXRWaWV3QnlJZDxJbWFnZT4oJ215UGljdHVyZScpO1xuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3IgLT4gJyArIGUubWVzc2FnZSkpO1xyXG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgb25Mb2dpblN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpbkZvcm0udmFsdWUpKTtcblxuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCB0aGlzLmxvZ2luRm9ybS5nZXQoJ3VzZXJOYW1lJykudmFsdWUpO1xuICAgICAgICBzZXRTdHJpbmcoXCJwYXNzd29yZFwiLCB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUpO1xuXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICB9XG5cbiAgICBvblJlZ2lzdGVyU3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZSkpO1xuXG4gICAgICAgIHNldFN0cmluZyhcInVzZXJOYW1lXCIsIHRoaXMucmVnaXN0ZXJGb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSk7XG4gICAgICAgIHNldFN0cmluZyhcInBhc3N3b3JkXCIsIHRoaXMucmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5sb2dpbkZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAndXNlck5hbWUnOiB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ3VzZXJOYW1lJykudmFsdWUsXG4gICAgICAgICAgICAncGFzc3dvcmQnOiB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWVcclxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn0iXX0=