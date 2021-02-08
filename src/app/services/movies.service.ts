import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../entities/Movie';
import {Comment} from '../entities/Comment';
import {catchError} from 'rxjs/operators';
import {AuthService} from './auth.service';

const API_URL = 'http://localhost:8080/movies/';
const SEARCH_URL = 'http://localhost:8080/search/movies/';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient, private authService: AuthService) {
    }

    getMovies(): Observable<any> {
        return this.http.get(API_URL + 'list', {responseType: 'json'}).pipe(
            catchError(error => this.authService.processHttpError(error)
            ));
    }

    getMovieById(movieId: number): Observable<Movie> {
        return this.http.get<Movie>(API_URL + movieId, {responseType: 'json'});
    }

    saveMovie(movieId: number, movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(API_URL + 'update/' + movieId, movie);
    }

    createMovie(movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(API_URL + 'create', movie);
    }

    deleteMovie(movie: Movie): any {
        return this.http.delete(API_URL + 'delete/' + movie.movieID);
    }

    searchMovie(search: string): any {
        return this.http.get<Movie>(SEARCH_URL + search, {responseType: 'json'});
    }

    getRelatedComments(movieId: number): Observable<any> {
        return this.http.get(API_URL + 'comments/' + movieId, {responseType: 'json'});
    }

    createComment(comment: Comment, movieId: number): Observable<Comment> {
        return this.http.post<Comment>(API_URL + 'comments/' + movieId + '/create', comment);
    }
}
