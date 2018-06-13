import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {
  }



  getIpAdress(url: string = 'get/ip/address') : Observable<any> {
    return this.http.post(apiUrl + url, httpOptions)
    .pipe(
        // catchError((error) => {console.log(error)} )
    );
  }
}
