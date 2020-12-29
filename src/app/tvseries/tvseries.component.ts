import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {TvSerie} from '../entities/TvSerie';
import {TvseriesService} from '../services/tvseries.service';

@Component({
    selector: 'app-tvseries',
    templateUrl: './tvseries.component.html',
    styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {
    tvseries: TvSerie[];

    constructor(private userService: UserService, private tvseriesService: TvseriesService) {
    }

    ngOnInit(): void {
        this.tvseriesService.getTvSeries().subscribe(
            data => {
                this.tvseries = data;
            },
            err => {
                this.tvseries = JSON.parse(err.error).message;
            }
        );
    }
}
