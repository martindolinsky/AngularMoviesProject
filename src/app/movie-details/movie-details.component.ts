import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Movie} from '../entities/Movie';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../services/movies.service';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(url): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    movie: Movie;
    movieTitle: string;
    buttonPressed: boolean;
    test: string;

    constructor(private route: ActivatedRoute,
                private moviesService: MoviesService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.paramMap.pipe(switchMap(paramMap => {
            if (paramMap.has('id')) {
                return this.moviesService.getMovieById(+paramMap.get('id'));
            } else {
                return of(new Movie());
            }
        }))
            .subscribe(movie => {
                this.movie = movie;
                console.log(movie);
                this.movieTitle = movie.titleEN;
                console.log(movie.movieID);


            });

        this.test = 'embed';
    }

}
