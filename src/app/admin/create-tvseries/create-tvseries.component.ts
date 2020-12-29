import {Component, OnInit} from '@angular/core';
import {TvSerie} from '../../entities/TvSerie';
import {ActivatedRoute, Router} from '@angular/router';
import {TvseriesService} from '../../services/tvseries.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
    selector: 'app-create-tvseries',
    templateUrl: './create-tvseries.component.html',
    styleUrls: ['./create-tvseries.component.css']
})
export class CreateTvseriesComponent implements OnInit {
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
        this.tvseriesService.createSerial(this.tvSerie).subscribe(serial => {
            this.tvSerie = serial;
        });
        this.router.navigateByUrl('admin/tvseries');
    }

}

