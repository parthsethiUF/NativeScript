"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var CommentModalComponent = /** @class */ (function () {
    function CommentModalComponent(params, page, formBuilder) {
        this.params = params;
        this.page = page;
        this.formBuilder = formBuilder;
        this.comment = this.formBuilder.group({
            author: ['', forms_1.Validators.required],
            rating: 5,
            comment: ['', forms_1.Validators.required],
            date: ''
        });
    }
    CommentModalComponent.prototype.ngOnInit = function () {
    };
    CommentModalComponent.prototype.submitComment = function (args) {
        //args holds the value of the comment object {author: string, rating: number, comment: string}
        var date = new Date();
        this.comment.patchValue({ author: args.value.author });
        this.comment.patchValue({ rating: args.value.rating });
        this.comment.patchValue({ comment: args.value.comment });
        this.comment.patchValue({ date: date.toISOString() });
        this.params.closeCallback(this.comment.value);
    };
    __decorate([
        core_1.ViewChild("rating"),
        __metadata("design:type", core_1.ElementRef)
    ], CommentModalComponent.prototype, "ratingElement", void 0);
    __decorate([
        core_1.ViewChild("author"),
        __metadata("design:type", core_1.ElementRef)
    ], CommentModalComponent.prototype, "authorElement", void 0);
    __decorate([
        core_1.ViewChild("comment"),
        __metadata("design:type", core_1.ElementRef)
    ], CommentModalComponent.prototype, "commentElement", void 0);
    CommentModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'comment.component.html',
            styleUrls: ['comment.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page,
            forms_1.FormBuilder])
    ], CommentModalComponent);
    return CommentModalComponent;
}());
exports.CommentModalComponent = CommentModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFDdEUsZ0NBQStCO0FBQy9CLHdDQUFvRTtBQU9wRTtJQU9JLCtCQUFvQixNQUF5QixFQUNqQyxJQUFVLEVBQ1YsV0FBd0I7UUFGaEIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQiw4RkFBOEY7UUFDOUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTVCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWdCLGlCQUFVO2dFQUFDO0lBQzFCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFnQixpQkFBVTtnRUFBQztJQUN6QjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBaUIsaUJBQVU7aUVBQUM7SUFMeEMscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQVE4QixnQ0FBaUI7WUFDM0IsV0FBSTtZQUNHLG1CQUFXO09BVDNCLHFCQUFxQixDQWdDakM7SUFBRCw0QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdjb21tZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY29tbWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWVudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbW1lbnQ6IEZvcm1Hcm91cDtcbiAgICBAVmlld0NoaWxkKFwicmF0aW5nXCIpIHJhdGluZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImF1dGhvclwiKSBhdXRob3JFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJjb21tZW50XCIpIGNvbW1lbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cbiAgICAgICAgdGhpcy5jb21tZW50ID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBhdXRob3I6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICByYXRpbmc6IDUsXG4gICAgICAgICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZGF0ZTogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdENvbW1lbnQoYXJncykge1xuICAgICAgICAvL2FyZ3MgaG9sZHMgdGhlIHZhbHVlIG9mIHRoZSBjb21tZW50IG9iamVjdCB7YXV0aG9yOiBzdHJpbmcsIHJhdGluZzogbnVtYmVyLCBjb21tZW50OiBzdHJpbmd9XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5jb21tZW50LnBhdGNoVmFsdWUoeyBhdXRob3I6IGFyZ3MudmFsdWUuYXV0aG9yIH0pO1xuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7IHJhdGluZzogYXJncy52YWx1ZS5yYXRpbmcgfSk7XG4gICAgICAgIHRoaXMuY29tbWVudC5wYXRjaFZhbHVlKHsgY29tbWVudDogYXJncy52YWx1ZS5jb21tZW50IH0pO1xuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7IGRhdGU6IGRhdGUudG9JU09TdHJpbmcoKSB9KTtcblxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMuY29tbWVudC52YWx1ZSk7XG4gICAgfVxufSJdfQ==