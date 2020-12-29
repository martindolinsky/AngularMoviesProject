import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvSerie} from '../../entities/TvSerie';
import {TvseriesService} from '../../services/tvseries.service';

@Component({
    selector: 'app-tvseries-table',
    templateUrl: './tvseries-table.component.html',
    styleUrls: ['./tvseries-table.component.css']
})
export class TvseriesTableComponent implements OnInit {
    tvSeries: TvSerie[];
    editedSerial: TvSerie;
    actionWithSerial: string;

    constructor(private tvseriesService: TvseriesService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.tvseriesService.getTvSeries().subscribe(
            data => {
                this.tvSeries = data;
            },
            err => {
                this.tvSeries = JSON.parse(err.error).message;
            }
        );
    }

    deleteTvSerie(serial: TvSerie): void {
        this.tvseriesService.deleteSerial(serial).subscribe(ok => {
            this.tvSeries = this.tvSeries.filter(s => s !== serial);
        });
    }

}
