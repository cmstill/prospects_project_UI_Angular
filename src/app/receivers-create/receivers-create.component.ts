import { Component } from '@angular/core';
import { ReceiverService } from '../receiver.service';
import { Receiver } from '../receiver';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receivers-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './receivers-create.component.html',
  styleUrl: './receivers-create.component.css'
})
export class ReceiversCreateComponent {
  receiver = {} as Receiver;
  constructor(private receiverService: ReceiverService) {} // this is how we inject a service w/ the constructor 

  createReceiver = (): void => {
    this.receiverService.createReceiver(this.receiver)
    .subscribe((res) => {
      console.log(res);
    }); // and this calls the receiverService that we've injected so we can call the createReceiver function and pass it this receiver
  }
}
