import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Movie} from '../entities/Movie';
import {MoviesService} from '../services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies: Movie[];

    constructor(private userService: UserService, private moviesService: MoviesService) {
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
}
