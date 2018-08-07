import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Page } from 'ui/page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.css']
})
export class CommentModalComponent implements OnInit {

    comment: FormGroup;
    @ViewChild("rating") ratingElement: ElementRef;
    @ViewChild("author") authorElement: ElementRef;
    @ViewChild("comment") commentElement: ElementRef;

    constructor(private params: ModalDialogParams,
        private page: Page,
        private formBuilder: FormBuilder) {

        this.comment = this.formBuilder.group({
            author: ['', Validators.required],
            rating: 5,
            comment: ['', Validators.required],
            date: ''
        });
    }

    ngOnInit() {
    }

    public submitComment(args) {
        //args holds the value of the comment object {author: string, rating: number, comment: string}
        let date = new Date();
        this.comment.patchValue({ author: args.value.author });
        this.comment.patchValue({ rating: args.value.rating });
        this.comment.patchValue({ comment: args.value.comment });
        this.comment.patchValue({ date: date.toISOString() });

        this.params.closeCallback(this.comment.value);
    }
}