import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {SnackbarService} from './snackbar.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private snackbarService: SnackbarService) {
    }

    login(credentials: { username: any; password: any; }): Observable<any> {
        return this.http.post(AUTH_API + 'login', {
            username: credentials.username,
            password: credentials.password
        }, {responseType: 'json'}).pipe(
            tap(token => {
                this.snackbarService.successMsg('User ' + credentials.username + ' has logged in');
                console.log('User ' + credentials.username + ' has logged in');
            }), catchError(err => this.processHttpError(err)));
    }

    // login(auth:Auth): Observable<string> {
    //     return this.http.post(this.serverUrl + "login", auth, {responseType: 'text'}).pipe(
    //         tap(token => {
    //             this.snackbarServise.successMessage("User " + auth.name + " has logged in");
    //         }),
    //         catchError(error => this.processHttpError(error))
    //     );
    // }

    register(user: { username: any; email: any; password: any; }): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password,
        }, httpOptions);
    }

    loggedIn(): any {
        return !!localStorage.getItem('auth-token');
    }

    processHttpError(error): any {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 0) {
                this.snackbarService.errorMsg('Server is unreachable');
                console.log('Server is unreachable');
            } else {
                if (error.status >= 400 && error.status < 500) {
                    const message = error.error.errorMessage ?? JSON.parse(error.error).errorMessage;
                    this.snackbarService.errorMsg(message);
                    console.log(message);
                } else {
                    this.snackbarService.errorMsg('Server error: ' + error.message);
                    console.log('Server error: ' + error.message);
                }
            }
        } else {
            this.snackbarService.errorMsg('Programmer\'s error : ' + JSON.stringify(error));
            console.log('Programmer\'s error : ' + JSON.stringify(error));
        }
        console.error('Server error: ', error);
        return EMPTY;
    }
}
