"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
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
    ContactComponent.prototype.sendEmail = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsdUVBQStEO0FBQy9ELDBDQUE0QztBQVE1QztJQUVJLDBCQUFxQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUFJLENBQUM7SUFDdEQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0Qsb0NBQVMsR0FBVDtRQUVJLEtBQUssQ0FBQyxTQUFTLEVBQUU7YUFDWixJQUFJLENBQUMsVUFBQyxLQUFjO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDVixFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsSUFBSSxFQUFFLGlCQUFpQjtpQkFDMUIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQXpCUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBSWlDLDhDQUFrQjtPQUZ4QyxnQkFBZ0IsQ0EwQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgKiBhcyBFbWFpbCBmcm9tICduYXRpdmVzY3JpcHQtZW1haWwnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHsgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cbiAgICBzZW5kRW1haWwoKSB7XG5cbiAgICAgICAgRW1haWwuYXZhaWxhYmxlKClcbiAgICAgICAgICAgIC50aGVuKChhdmFpbDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdmFpbCkge1xuICAgICAgICAgICAgICAgICAgICBFbWFpbC5jb21wb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBbJ2NvbmZ1c2lvbkBmb29kLm5ldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ1tDb25GdXNpb25dOiBRdWVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnRGVhciBTaXIvTWFkYW06J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gRW1haWwgQ29uZmlndXJlZCcpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cbn0iXX0=