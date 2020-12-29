import {Component, OnInit} from '@angular/core';
import {Movie} from '../../entities/Movie';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-movies-table',
    templateUrl: './movies-table.component.html',
    styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {
    movies: Movie[];
    editedMovie: Movie;
    actionWithMovie: string;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.moviesService.getMovies().subscribe(
            data => {
                this.movies = data;
            },
            err => {
                this.movies = JSON.parse(err.error).message;
            }
        );
    }

    deleteMovie(movie: Movie): void {
        this.moviesService.deleteMovie(movie).subscribe(ok => {
            this.movies = this.movies.filter(m => m !== movie);
        });
    }

}
