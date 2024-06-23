import { Injectable } from '@angular/core';
import { Receiver } from './receiver';
import { RECEIVERS } from './mock-receivers'; // needs both these imports since 1.) needs access to my receiver type and 2.) needs access to my simulated db RECEIVERS array
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ // this decorator is what allows us to inject in other files
  providedIn: 'root'
})
export class ReceiverService {
  private receiversUrl = 'http://localhost:3000/api/v1/receivers'


  constructor(
    private http: HttpClient,
  ) { }

  getReceivers = (): Observable<Receiver[]> => {
    return this.http.get<Receiver[]>(this.receiversUrl);
  } // this is a function that returns an array of Receiver types...that is stored in my RECEIVERS array.  we declare the functions that interact w/ our data/api in the xService class in our service
  getReceiver = (id: string): Observable<Receiver> => {
    const receiver = RECEIVERS.find(receiver => receiver.id === id);

    if (receiver) {
      return of(receiver)
    }

    return of({} as Receiver);
  }
}


// service is responsible for getting data and sending data/talking to our API to do that...then our API talks to our database through the model