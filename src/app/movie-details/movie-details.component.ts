import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Movie} from '../entities/Movie';
import {Comment} from '../entities/Comment';
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
    movieId: number;
    test: string;
    comments: Comment[];
    comment: Comment = {};

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
                this.movieId = movie.movieID;
                console.log(movie.movieID);
            });
        this.getComments();

        this.test = 'embed';
    }
    onSubmit(): void {
        this.moviesService.createComment(this.comment, this.movieId).subscribe(comment => {
            this.comment = comment;
            // this.router.navigateByUrl('movies/' + this.movieId);
            window.location.reload();
        });


    }
    getComments(): any {
        this.route.paramMap.pipe(switchMap(paramMap => {
            if (paramMap.has('id')) {
                return this.moviesService.getRelatedComments(+paramMap.get('id'));
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
