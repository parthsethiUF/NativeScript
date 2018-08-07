"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(formBuilder, modalService, vcRef) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this.modalService.showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === "guest") {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === "date-time") {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
    };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.reservation.value));
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html',
            styleUrls: ['./reservation.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBRy9GLHdDQUFvRTtBQUVwRSxrRUFBMkY7QUFDM0YsNkZBQTJGO0FBUzNGO0lBSUksOEJBQW9CLFdBQXdCLEVBQ2hDLFlBQWdDLEVBQ2hDLEtBQXVCO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRS9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw4Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFBcEIsaUJBa0JDO1FBaEJHLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBeUIsRUFBRSxPQUFPLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ2pCLElBQUksYUFBYSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBL0RRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQUttQyxtQkFBVztZQUNsQixpQ0FBa0I7WUFDekIsdUJBQWdCO09BTjFCLG9CQUFvQixDQWdFaEM7SUFBRCwyQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ3VpL3N3aXRjaCc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXJlc2VydmF0aW9uJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXNlcnZhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHJlc2VydmF0aW9uOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGd1ZXN0czogMyxcbiAgICAgICAgICAgIHNtb2tpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0ZVRpbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbFZpZXcoYXJncykge1xuXG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgY29udGV4dDogYXJncyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncyA9PT0gXCJndWVzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGd1ZXN0czogcmVzdWx0IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSBcImRhdGUtdGltZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiByZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBvblNtb2tpbmdDaGVja2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNtb2tpbmdTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZiAoc21va2luZ1N3aXRjaC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgc21va2luZzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkd1ZXN0Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZ3Vlc3RzOiB0ZXh0RmllbGQudGV4dCB9KTtcbiAgICB9XG5cbiAgICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZGF0ZVRpbWU6IHRleHRGaWVsZC50ZXh0IH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlc2VydmF0aW9uLnZhbHVlKSk7XG4gICAgfVxufSJdfQ==