import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private handleError(error: Error | HttpErrorResponse) {
   if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
      } else {
        // Handle Http Error (error.status === 403, 404...)
      }
   } else {
     // Handle Client Error (Angular Error, ReferenceError...)
   }
  // Log the error anyway
  console.error('Algo sucedio: ', error);
}

  getIpAdress(url: string = 'get/ip/address') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('/api/' + url, httpOptions)
      // .pipe(
      //     catchError(this.handleError(response.error))
      // );
  }
}
