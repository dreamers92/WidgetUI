import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IContact } from '../model/form-details';

 
 
 
 
 
 
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})



export class ContactService {
  
  private widgetApiUrl = environment.widgetApi.baseUrl;  // URL to web api
 
  constructor(private http: HttpClient) {
   }
 
 
/** POST: sending the contact data*/
sendContactInfo (contact: IContact): Observable<any> {
  return this.http.post(this.widgetApiUrl+'api/register', contact, httpOptions).pipe(
    catchError(this.handleError<any>('SendContactData'))
  );
}

/** POST: getting the contacts data*/
viewContacts (): Observable<any> {
    return this.http.get(this.widgetApiUrl+'api/contacts',  httpOptions).pipe(
      catchError(this.handleError<any>('GetContactsData'))
    );
  }
 

  
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
   
 
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      console.log('#########ERROR#######');
      console.log(error.message);
      console.log(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
 
 
 
}
 

