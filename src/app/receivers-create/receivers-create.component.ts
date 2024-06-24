import { of, Observable, catchError, map, tap } from 'rxjs';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReceiverService } from '../receiver.service';
import { Router } from '@angular/router'
import { Receiver } from '../receiver';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receivers-create',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './receivers-create.component.html',
  styleUrl: './receivers-create.component.css'
})
export class ReceiversCreateComponent {
  receiver = {} as Receiver;

  error?: string;

  constructor(private receiverService: ReceiverService, private router: Router) {} // this is how we inject a service w/ the constructor 

  createReceiver = (): void => {
    this.receiverService.createReceiver(this.receiver)
    .pipe(catchError(this.handleError))
    .subscribe((res) => {
      if (!this.error) {
        this.router.navigate(['/receivers']);
      }
    }); // and this calls the receiverService that we've injected so we can call the createReceiver function and pass it this receiver
  }

  handleError = (err: any): Observable<any> => {
    console.error(err);
    this.error = `Property ${err.error.error[0].instancePath} is invalid.  It ${err.error.error[0].message}`;
    return of ({})
  }
}
