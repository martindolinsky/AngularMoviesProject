import {Component, OnInit} from '@angular/core';
import {Movie} from '../../entities/Movie';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
    selector: 'app-edit-movie',
    templateUrl: './edit-movie.component.html',
    styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
    movie: Movie;
    movieTitle: string;
    buttonPressed: boolean;

    constructor(private route: ActivatedRoute,
                private moviesService: MoviesService,
                private router: Router,
                private snackbarService: SnackbarService) {
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
    }

    onSubmit(): void {
        this.buttonPressed = true;
        this.moviesService.saveMovie(this.movie.movieID, this.movie).subscribe(movie => {
            this.movie = movie;
            this.router.navigateByUrl('admin/movies');
            this.snackbarService.successMsg('Movie successfully edited');
        });
    }


}
