import { Component, OnInit, Inject, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { TextField } from 'ui/text-field';
import { Switch } from 'ui/switch';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ReservationModalComponent } from "../reservationmodal/reservationmodal.component";

import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { Page } from 'ui/page';
import { View } from 'ui/core/view';
import { CouchbaseService } from '../services/couchbase.service';

@Component({
    selector: 'app-reservation',
    moduleId: module.id,
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

    reservation: FormGroup;
    afterSubmit: boolean = false;
    docId: string = "reservations";
    reservations: Array<any>;

    constructor(
        private formBuilder: FormBuilder,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private page: Page,
        private changeDetectorRef: ChangeDetectorRef,
        private couchbaseService: CouchbaseService) {

        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    onSmokingChecked(args) {
        let smokingSwitch = <Switch>args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    }

    onGuestChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ guests: textField.text });
    }

    onDateTimeChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ dateTime: textField.text });
    }

    onSubmit() {
        let inputForm = this.page.getViewById<View>('inputForm');
        let summaryForm = this.page.getViewById<View>('summaryForm');

        summaryForm.animate({
            scale: { x: 0, y: 0 },
            duration: 200
        });

        inputForm.animate({
            opacity: 0,
            scale: { x: -2, y: -2 },
            duration: 500
        })
            .then(() => {
                this.afterSubmit = true;
                summaryForm.animate({
                    opacity: 1,
                    scale: { x: 1, y: 1 },
                    duration: 500
                });
            });

        // the inputs are saved in Couchbase.
        let doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            console.log('This is the first reservation');
            this.couchbaseService.createDocument({ "reservations": [] }, this.docId);
            doc = this.couchbaseService.getDocument(this.docId);
        }
        this.reservations = doc.reservations;
        this.reservations.push(this.reservation.value);
        this.couchbaseService.updateDocument(this.docId, { "reservations": this.reservations });
        console.log(JSON.stringify(doc));
    }

    createModalView(args) {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };

        this.modalService.showModal(ReservationModalComponent, options)
            .then((result: any) => {
                if (args === "guest") {
                    this.reservation.patchValue({ guests: result });
                }
                else if (args === "date-time") {
                    this.reservation.patchValue({ dateTime: result });
                }
            });

    }
}