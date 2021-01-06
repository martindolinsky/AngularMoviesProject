import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entities/User';

const API_URL = 'http://localhost:8080/api/test/';
const USER_API_URL = 'http://localhost:8080/api/auth/';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getPublicContent(): Observable<any> {
        return this.http.get(API_URL + 'all', {responseType: 'text'});
    }

    getUserBoard(): Observable<any> {
        return this.http.get(API_URL + 'user', {responseType: 'text'});
    }

    getModeratorBoard(): Observable<any> {
        return this.http.get(API_URL + 'mod', {responseType: 'text'});
    }

    getAdminBoard(): Observable<any> {
        return this.http.get(API_URL + 'admin', {responseType: 'text'});
    }

    getUsers(): Observable<any> {
        return this.http.get(USER_API_URL + 'list', {responseType: 'json'});
    }

    deleteUser(user: User): any {
        return this.http.delete(USER_API_URL + 'delete/' + user.id);
    }
}
