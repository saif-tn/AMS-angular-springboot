import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, map, tap, } from 'rxjs/operators';
import { PageProvider } from '../entities/PageProvider';
import { Provider } from '../entities/Provider';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {
    private baseUrl = 'http://localhost:8080/api/providers';
    private urlPage = 'http://localhost:8080/api/providers/?page=';

    constructor(private http: HttpClient) { }

    getProvidersList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }


    getProviders(): Observable<Provider[]> {
        return this.http.get<Provider[]> ( this.baseUrl )
         .pipe(
              catchError( this.handleError('getProviders', []) )
         );
     }


    getPageProvider(page: number): Observable<PageProvider> {
        let url = this.urlPage;
        url = url + page + '&size=4';
        return this.http.get<PageProvider>(url)
        .pipe(
            map(
                response => {
                    const data = response;
                    console.log(data.content);
                    return data ;
                }
            )
        );
    }


    getProvider(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }


    createProvider(provider: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, provider);
    }

    updateProvider(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteProvider(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }


    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
      }

}
