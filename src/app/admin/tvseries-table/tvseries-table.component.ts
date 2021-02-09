import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvSerie} from '../../entities/TvSerie';
import {TvseriesService} from '../../services/tvseries.service';
import {ConfirmDialogComponent, ConfirmDialogData} from '../confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-tvseries-table',
    templateUrl: './tvseries-table.component.html',
    styleUrls: ['./tvseries-table.component.css']
})
export class TvseriesTableComponent implements OnInit {
    tvSeries: TvSerie[];
    deletedSerial: TvSerie;

    constructor(private tvseriesService: TvseriesService, private route: ActivatedRoute, private dialog: MatDialog) {
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

    deleteTvSerie(serial: TvSerie): any {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: new ConfirmDialogData('Deleting serial', 'Do you really want to delete serial ' + serial.titleEN + ' '
                + serial.secondTitleEN + '?')
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.tvseriesService.deleteSerial(serial).subscribe(ok => {
                    if (ok) {
                        this.deletedSerial = serial;
                        this.tvSeries = this.tvSeries.filter(tv => tv.serialID !== serial.serialID);
                    }
                });
            }
        });
    }

}
