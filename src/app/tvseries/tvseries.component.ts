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
    search: string;

    constructor(private userService: UserService, private tvseriesService: TvseriesService) {
    }

    ngOnInit(): void {
        this.getTvSeries();
    }

    onSubmit(): void {
        this.tvseriesService.searchSerial(this.search).subscribe(
            data => {
                this.tvseries = data;
            },
            err => {
                this.tvseries = JSON.parse(err.error).message;
            }
        );
    }

    searchSerial(input: string): any {
        if (input === '') {
            this.getTvSeries();
        }
        this.tvseriesService.searchSerial(this.search).subscribe(
            data => {
                this.tvseries = data;
                console.log(data);
                input = this.search;
                console.log(input);
            },
            err => {
                this.tvseries = JSON.parse(err.error).message;
            }
        );
    }

    private getTvSeries(): any {
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
