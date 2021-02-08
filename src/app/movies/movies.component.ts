import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Movie} from '../entities/Movie';
import {MoviesService} from '../services/movies.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies: Movie[];
    search: string;

    constructor(private userService: UserService, private moviesService: MoviesService, private authService: AuthService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getMovies();
    }

    onSubmit(): void {
    }

    searchMovie(input: string): any {
        if (input === '') {
            this.getMovies();
        }
        this.moviesService.searchMovie(this.search).subscribe(
            data => {
                this.movies = data;
                input = this.search;
            },
            err => {
                this.movies = JSON.parse(err.error).message;
            }
        );
    }

    getMovies(): any {
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
