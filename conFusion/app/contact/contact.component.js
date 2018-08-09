"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
var TNSPhone = require("nativescript-phone");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fonticon) {
        this.fonticon = fonticon;
    }
    ContactComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.callHome = function () {
        console.log("calling");
        TNSPhone.dial('999-999-9999', true);
    };
    ContactComponent.prototype.sendMail = function () {
        Email.available()
            .then(function (avail) {
            if (avail) {
                Email.compose({
                    to: ['confusion@food.net'],
                    subject: '[ConFusion]: Query',
                    body: 'Dear Sir/Madam:'
                });
            }
            else
                console.log('No Email Configured');
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsdUVBQStEO0FBQy9ELDBDQUE0QztBQUM1Qyw2Q0FBK0M7QUFTL0M7SUFFSSwwQkFBcUIsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBSSxDQUFDO0lBQ3RELDRDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxtQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBRUksS0FBSyxDQUFDLFNBQVMsRUFBRTthQUNaLElBQUksQ0FBQyxVQUFDLEtBQWM7WUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNWLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFFVixDQUFDO0lBL0JRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0FJaUMsOENBQWtCO09BRnhDLGdCQUFnQixDQWdDNUI7SUFBRCx1QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCAqIGFzIEVtYWlsIGZyb20gJ25hdGl2ZXNjcmlwdC1lbWFpbCc7XG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250YWN0JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb250YWN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkgeyB9XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuICAgIFxyXG4gICAgY2FsbEhvbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nXCIpO1xyXG4gICAgICAgIFROU1Bob25lLmRpYWwoJzk5OS05OTktOTk5OScsIHRydWUpO1xyXG4gICAgfVxuXG4gICAgc2VuZE1haWwoKSB7XG5cbiAgICAgICAgRW1haWwuYXZhaWxhYmxlKClcbiAgICAgICAgICAgIC50aGVuKChhdmFpbDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdmFpbCkge1xuICAgICAgICAgICAgICAgICAgICBFbWFpbC5jb21wb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBbJ2NvbmZ1c2lvbkBmb29kLm5ldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ1tDb25GdXNpb25dOiBRdWVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnRGVhciBTaXIvTWFkYW06J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gRW1haWwgQ29uZmlndXJlZCcpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cbn0iXX0=