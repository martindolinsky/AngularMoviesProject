import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {TvSerie} from '../entities/TvSerie';
import {TvseriesService} from '../services/tvseries.service';
import {Comment} from '../entities/Comment';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(url): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    selector: 'app-tvseries-details',
    templateUrl: './tvseries-details.component.html',
    styleUrls: ['./tvseries-details.component.css']
})
export class TvseriesDetailsComponent implements OnInit {

    serial: TvSerie;
    comments: Comment[];
    comment: Comment = {};
    serialId: number;

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
            .subscribe(tvseries => {
                this.serial = tvseries;
                this.serialId = tvseries.serialID;
                console.log(tvseries);


            });
        this.getComments();
    }
    onSubmit(): void {
        this.tvseriesService.createComment(this.comment, this.serialId).subscribe(comment => {
            this.comment = comment;
            this.getComments();
        });

    }

    getComments(): any {
        this.route.paramMap.pipe(switchMap(paramMap => {
            if (paramMap.has('id')) {
                return this.tvseriesService.getRelatedComments(+paramMap.get('id'));
            } else {
                return of(new Comment());
            }
        }))
            .subscribe(comment => {
                this.comments = comment;
                console.log(comment);
            });
    }

}

