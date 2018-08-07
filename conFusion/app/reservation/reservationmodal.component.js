"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var ReservationModalComponent = /** @class */ (function () {
    function ReservationModalComponent(params, page) {
        this.params = params;
        this.page = page;
        this.guestArray = [1, 2, 3, 4, 5, 6];
        this.isDateTime = false;
        if (params.context === "guest") {
            this.isDateTime = false;
        }
        else if (params.context === "date-time") {
            this.isDateTime = true;
        }
    }
    ReservationModalComponent.prototype.ngOnInit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            console.log(datePicker);
            var currentdate = new Date();
            datePicker.year = currentdate.getFullYear();
            datePicker.month = currentdate.getMonth() + 1;
            datePicker.day = currentdate.getDate();
            datePicker.minDate = currentdate;
            datePicker.maxDate = new Date(2045, 4, 12);
            var timePicker = this.timePickerElement.nativeElement;
            timePicker.hour = currentdate.getHours();
            timePicker.minute = currentdate.getMinutes();
        }
    };
    ReservationModalComponent.prototype.submit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            var selectedDate = datePicker.date;
            var timePicker = this.timePickerElement.nativeElement;
            var selectedTime = timePicker.time;
            var reserveTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
            this.params.closeCallback(reserveTime.toISOString());
        }
        else {
            var picker = this.guestPickerElement.nativeElement;
            this.params.closeCallback(this.guestArray[picker.selectedIndex]);
        }
    };
    __decorate([
        core_1.ViewChild("datePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "datePickerElement", void 0);
    __decorate([
        core_1.ViewChild("timePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "timePickerElement", void 0);
    __decorate([
        core_1.ViewChild("guestPicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "guestPickerElement", void 0);
    ReservationModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './reservationmodal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page])
    ], ReservationModalComponent);
    return ReservationModalComponent;
}());
exports.ReservationModalComponent = ReservationModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFJdEUsZ0NBQStCO0FBTS9CO0lBU0ksbUNBQW9CLE1BQXlCLEVBQ2pDLElBQVU7UUFERixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBUnRCLGVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVF4QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFbEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QixJQUFJLFdBQVcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxVQUFVLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QyxVQUFVLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztZQUNqQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFM0MsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDOUUsVUFBVSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUM7SUFFTSwwQ0FBTSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDOUUsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLFVBQVUsR0FBMkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUM5RSxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFDakQsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsT0FBTyxFQUFFLEVBQ3RCLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3BFLENBQUM7SUFDTCxDQUFDO0lBckR3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsaUJBQVU7d0VBQUM7SUFDOUI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLGlCQUFVO3dFQUFDO0lBQzdCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFxQixpQkFBVTt5RUFBQztJQVBoRCx5QkFBeUI7UUFKckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBVThCLGdDQUFpQjtZQUMzQixXQUFJO09BVmIseUJBQXlCLENBMkRyQztJQUFELGdDQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICd1aS90aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSAndWkvbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGd1ZXN0QXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNl07XG4gICAgZ3Vlc3RzOiBudW1iZXI7XG4gICAgaXNEYXRlVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBWaWV3Q2hpbGQoXCJkYXRlUGlja2VyXCIpIGRhdGVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0aW1lUGlja2VyXCIpIHRpbWVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJndWVzdFBpY2tlclwiKSBndWVzdFBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgICAgIGlmIChwYXJhbXMuY29udGV4dCA9PT0gXCJndWVzdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGF0ZVRpbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbXMuY29udGV4dCA9PT0gXCJkYXRlLXRpbWVcIikge1xuICAgICAgICAgICAgdGhpcy5pc0RhdGVUaW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGF0ZVRpbWUpIHtcblxuICAgICAgICAgICAgbGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gY3VycmVudGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIubW9udGggPSBjdXJyZW50ZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gY3VycmVudGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gY3VycmVudGRhdGU7XG4gICAgICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XG5cbiAgICAgICAgICAgIGxldCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy50aW1lUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGltZVBpY2tlci5ob3VyID0gY3VycmVudGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIHRpbWVQaWNrZXIubWludXRlID0gY3VycmVudGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEYXRlVGltZSkge1xuICAgICAgICAgICAgbGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gZGF0ZVBpY2tlci5kYXRlO1xuICAgICAgICAgICAgbGV0IHRpbWVQaWNrZXI6IFRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj50aGlzLnRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRUaW1lID0gdGltZVBpY2tlci50aW1lO1xuICAgICAgICAgICAgbGV0IHJlc2VydmVUaW1lID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzZXJ2ZVRpbWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+dGhpcy5ndWVzdFBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5ndWVzdEFycmF5W3BpY2tlci5zZWxlY3RlZEluZGV4XSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=