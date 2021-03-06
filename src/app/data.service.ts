import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

const apiUrl = 'https://107.180.3.75:6443/api/';

@Injectable({
	providedIn: 'root'
})

export class DataService {
	constructor(private http: HttpClient) {
	}

	login(url: string = 'login', form: any): Observable<any> {
        let data = { form };
		return this.http.post(apiUrl + url, data, httpOptions)
			.pipe(
				// catchError((error) => {console.log(error)} )
			);
	}

	getTable(url: string = 'get/all', collection: string = 'visitor', order: any = {_id: 1}, limit: number = 0): Observable<any> {
        let data = {collection, limit, order};
		return this.http.post(apiUrl + url, data, httpOptions)
			.pipe(
				// catchError((error) => {console.log(error)} )
			);
	}

    getTableDisctint(url: string = 'get/all', collection: string = 'visitor',distinct: string = "ip_address"): Observable<any> {
        let data = {collection, distinct};
		return this.http.post(apiUrl + url, data, httpOptions)
			.pipe(
				// catchError((error) => {console.log(error)} )
			);
	}

    visitorCounter(url: string = 'save', collection: string = 'visitor', form: any = {counter: 1}): Observable<any> {
        let data = {
            collection,
            form
        };
		return this.http.post(apiUrl + url, data, httpOptions)
			.pipe(
				// catchError((error) => {console.log(error)} )
			);
	}

    insertTable(url: string = 'save', collection: string = 'visitor', form: any = null): Observable<any> {
        let data = {
            collection,
            form
        };
		return this.http.post(apiUrl + url, data, httpOptions)
			.pipe(
				// catchError((error) => {console.log(error)} )
			);
	}
}
