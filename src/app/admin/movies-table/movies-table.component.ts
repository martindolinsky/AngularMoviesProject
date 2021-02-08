import {Component, OnInit} from '@angular/core';
import {Movie} from '../../entities/Movie';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {ConfirmDialogComponent, ConfirmDialogData} from '../confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
    selector: 'app-movies-table',
    templateUrl: './movies-table.component.html',
    styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {
    movies: Movie[];


    constructor(private moviesService: MoviesService, private route: ActivatedRoute, private dialog: MatDialog,
                private snackbarService: SnackbarService) {
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

    deleteMovie(movie: Movie): any {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: new ConfirmDialogData('Deleting movie', 'Do you really want to delete movie ' + movie.titleEN + ' '
                + movie.secondTitleEN + '?')
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.moviesService.deleteMovie(movie).subscribe(ok => {
                    if (ok) {
                        this.movies = this.movies.filter(m => m.movieID !== movie.movieID);
                        this.snackbarService.successMsg('Movie successfully deleted');
                    }
                });
            }
        });
    }

}
