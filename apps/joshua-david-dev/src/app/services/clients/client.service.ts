import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const baseUrl: string = "http://localhost:8080/api/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

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

  public get(id?: string, name?: string): Observable<any> {
    return this.http.get(`${baseUrl}/${name ? name : id}`)
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

  public update(data: any, id?: string, name?: string): Observable<any> {
    const path = id ? id : name;
    return this.http.put(`${baseUrl}/${path}`, data)
      .pipe(
        catchError(this.handleError<any[]>('update'))
      );
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
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
