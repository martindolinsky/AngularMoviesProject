import {Component, OnInit} from '@angular/core';
import {Movie} from '../entities/Movie';
import {UserService} from '../services/user.service';
import {MoviesService} from '../services/movies.service';
import {TvseriesService} from '../services/tvseries.service';
import {TvSerie} from '../entities/TvSerie';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    movies: Movie[];
    tvseries: TvSerie[];
    search: string;

    constructor(private userService: UserService, private moviesService: MoviesService, private tvseriesService: TvseriesService) {
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

        this.tvseriesService.getTvSeries().subscribe(
            data => {
                this.tvseries = data;
            },
            err => {
                this.tvseries = JSON.parse(err.error).message;
            }
        );
    }
}
