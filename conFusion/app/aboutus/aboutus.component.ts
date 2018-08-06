import { Component, OnInit, Inject } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
    selector: 'app-aboutus',
    moduleId: module.id,
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit {
    
    leaders: Leader[];
    errMess: string;

    constructor(
        private leaderService: LeaderService,
        @Inject('baseURL') private baseURL) { }

    ngOnInit() {
        this.leaderService.getLeaders()
            .subscribe(leaders => this.leaders = leaders,
                errmess => this.errMess = <any>errmess);
    }

}