import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../entities/Movie';

const API_URL = 'http://localhost:8080/movies/';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) {
    }

    getMovies(): Observable<any> {
        return this.http.get(API_URL + 'list', {responseType: 'json'});
    }

    getMovieById(movieId: number): Observable<Movie> {
        return this.http.get<Movie>(API_URL + movieId, {responseType: 'json'});
    }

    saveMovie(movieId: number, movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(API_URL + 'update/' + movieId, movie);
    }

    deleteMovie(movie: Movie): any {
        return this.http.delete(API_URL + 'delete/' + movie.movieID);
    }
}
