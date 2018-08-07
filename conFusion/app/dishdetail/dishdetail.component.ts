import { Component, OnInit, Inject, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { CommentModalComponent } from '../comment/comment.component';
import { Dish } from "../shared/dish";
import { Comment } from "../shared/comment";
import { DishService } from "../services/dish.service";
import { FavoriteService } from '../services/favorite.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ActivatedRoute, Params } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Toasty } from 'nativescript-toasty';
import { action } from 'ui/dialogs';

@Component({
    selector: 'app-dishdetail',
    moduleId: module.id,
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    comment: Comment;
    errMess: string;
    avgstars: string;
    numcomments: number;
    favorite: boolean = false;

    constructor(private dishService: DishService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private favoriteservice: FavoriteService,
        private fonticon: TNSFontIconService,
        private vcRef: ViewContainerRef,
        private modalService: ModalDialogService,
        @Inject('baseURL') private baseURL) { }

    ngOnInit() {

        this.route.params
            .pipe(switchMap((params: Params) => this.dishService.getDish(params['id']
            )))
            .subscribe(dish => {
            this.dish = dish;
                this.favorite = this.favoriteservice.isFavorite(this.dish.id);
                this.numcomments = this.dish.comments.length;

                let total = 0;
                this.dish.comments.forEach(comment => total += comment.rating);
                this.avgstars = (total / this.numcomments).toFixed(2);
            },
                errmess => { this.dish = null; this.errMess = <any>errmess; });
    }

    openActionDialog(args) {

        let options = {
            title: "Action",
            message: "What are you going to do?",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add a Comment"]
        };

        action(options).then((args) => {
            if (args == "Add to Favorites") {
                this.addToFavorites();
            } else if (args == "Add a Comment") {
                console.log("adding a comment");
                this.createModalView();
            }
        });
    }

    addToFavorites() {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            const toast = new Toasty("Added Dish " + this.dish.id, "short", "bottom");
            toast.show();
        }
    }

    createModalView() {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };

        this.modalService.showModal(CommentModalComponent, options)
            .then((result: any) => {
                this.dish.comments.push(result);
            });
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}