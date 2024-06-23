import { Injectable } from '@angular/core';
import { Receiver } from './receiver';
import { RECEIVERS } from './mock-receivers'; // needs both these imports since 1.) needs access to my receiver type and 2.) needs access to my simulated db RECEIVERS array
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ // this decorator is what allows us to inject in other files
  providedIn: 'root'
})
export class ReceiverService {
  private receiversUrl = '/api/v1/receivers'; // maybe this is api/v1/receivers?  anyway this is where we set the url to our api endpoints


  constructor(
    private http: HttpClient,
  ) { }

  getReceivers = (): Observable<Receiver[]> => {
    return this.http.get<Receiver[]>(this.receiversUrl);
  } // this is a function that returns an array of Receiver types...that is stored in my RECEIVERS array.  we declare the functions that interact w/ our data/api in the xService class in our service
  getReceiver = (id: string): Observable<Receiver> => {

    return this.http.get<Receiver>(`${this.receiversUrl}/${id}`); // this is using http.get and setting that type to receiver then passing what wer're getting as the receiversUrl we set above in ReceiverService with the path param of id (this is what /${id} is doing)
  }

  deleteReceiver = (id: string): Observable<boolean> => {
    this.http.delete(`${this.receiversUrl}/${id}`)

    return of(true);
  }

  updateReceiver = (id: string, receiver: Receiver): Observable<Receiver> => {

    return this.http.put<Receiver>(`${this.receiversUrl}/${id}`, receiver); //this is going to be as a full replace instead of a patch...I only have a patch in my endpoint so we'll see how this works...probably going to have problems. 
  }

  createReceiver = (receiver: Receiver): Observable<Receiver> => {
   
   return this.http.post<Receiver>(`${this.receiversUrl}`, receiver)
    
  }
}


// service is responsible for getting data and sending data/talking to our API to do that...then our API talks to our database through the model