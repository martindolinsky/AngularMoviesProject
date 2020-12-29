import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvSerie} from '../entities/TvSerie';

const API_URL = 'http://localhost:8080/tvseries/';

@Injectable({
    providedIn: 'root'
})
export class TvseriesService {

    constructor(private http: HttpClient) {
    }

    getTvSeries(): Observable<any> {
        return this.http.get(API_URL + 'list', {responseType: 'json'});
    }

    getSerialById(serialId: number): Observable<TvSerie> {
        return this.http.get<TvSerie>(API_URL + serialId, {responseType: 'json'});
    }

    saveSerial(serialId: number, serial: TvSerie): Observable<TvSerie> {
        return this.http.post<TvSerie>(API_URL + 'update/' + serialId, serial);
    }

    createSerial(serial: TvSerie): Observable<TvSerie> {
        return this.http.post<TvSerie>(API_URL + 'create', serial);
    }

    deleteSerial(serial: TvSerie): any {
        return this.http.delete(API_URL + 'delete/' + serial.serialID);
    }
}
