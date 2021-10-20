import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const baseUrl: string = "http://localhost:8080/api/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {  }

  public create(data: any): Observable<any> {
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.handleError<any[]>('create'))
      );
  }

  public get(slug?: string | null): Observable<any> {
    return this.http.get(`${baseUrl}/blog/${slug}`)
      .pipe(
        catchError(this.handleError<any[]>('get'))
      );
  }

  public getAll(): Observable<any> {
    return this.http.get(baseUrl)
      .pipe(
        catchError(this.handleError<any[]>('getAll'))
      );
  }

  public update(data: any,slug?: string): Observable<any> {
    return this.http.put(`${baseUrl}/blog/${slug}`, data)
      .pipe(
        catchError(this.handleError<any[]>('update'))
      );
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/blog/${id}`)
      .pipe(
        catchError(this.handleError<any>('deleteByID'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
