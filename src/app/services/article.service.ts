import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from '../entities/Article';
import { PageArticle } from '../entities/PageArticles';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private baseUrl = 'http://localhost:8080/api/articles';
    private urlPage = 'http://localhost:8080/api/articles/?page=';
    private addUrl  = 'http://localhost:8080/api/providers';

    constructor(private http: HttpClient) { }

    getArticlesList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getProviderArticle(id: number) {
        console.log('provider_id' + id);
        return 10;
    }

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]> ( this.baseUrl )
         .pipe(
              catchError( this.handleError('getArticles', []) )
         );
     }

     getPageArticle(page: number): Observable<PageArticle> {
        let url = this.urlPage;
        url = url + page + '&size=4';
        return this.http.get<PageArticle>(url)
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

    getArticle(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }


    createArticle(id: number, article: Object): Observable<Object> {
    return this.http.post(`${this.addUrl}/${id}/articles`, article);
    }

    updateArticle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteArticle(id: number): Observable<any> {
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
