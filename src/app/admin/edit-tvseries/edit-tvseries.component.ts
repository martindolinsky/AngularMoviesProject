import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {TvSerie} from '../../entities/TvSerie';
import {TvseriesService} from '../../services/tvseries.service';

@Component({
    selector: 'app-edit-tvseries',
    templateUrl: './edit-tvseries.component.html',
    styleUrls: ['./edit-tvseries.component.css']
})
export class EditTvseriesComponent implements OnInit {
    tvSerie: TvSerie;
    tvSerieTitle: string;
    private buttonPressed: boolean;

    constructor(private route: ActivatedRoute,
                private tvseriesService: TvseriesService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.paramMap.pipe(switchMap(paramMap => {
            if (paramMap.has('id')) {
                return this.tvseriesService.getSerialById(+paramMap.get('id'));
            } else {
                return of(new TvSerie());
            }
        }))
            .subscribe(tvSerie => {
                this.tvSerie = tvSerie;
                console.log(tvSerie);
                this.tvSerieTitle = tvSerie.titleEN;


            });
    }

    onSubmit(): void {
        this.buttonPressed = true;
        this.tvseriesService.saveSerial(this.tvSerie.serialID, this.tvSerie).subscribe(serial => {
            this.tvSerie = serial
            ;
        });
    }

}

