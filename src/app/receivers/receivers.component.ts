import { Component, OnInit } from '@angular/core';
import { Receiver } from '../receiver';
import { FormsModule } from '@angular/forms';
import { ReceiverService } from '../receiver.service';
import { NgFor, NgIf } from '@angular/common';
import { ReceiverDetailComponent } from '../receiver-detail/receiver-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receivers',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ReceiverDetailComponent, RouterLink],
  templateUrl: './receivers.component.html',
  styleUrl: './receivers.component.css'
})

export class ReceiversComponent {

  selectedReceiver!: Receiver; // so here I am creating a variable selectedReceiver and setting its type to = the Receiver interface that I created in recevier.ts and then imported
  receivers: Receiver[] = [];

  constructor(private receiverService: ReceiverService) { } // this constructor function injects the service we created earlier into our receivers resource

  getReceivers = (): void => {
    this.receiverService.getReceivers().subscribe((receivers) => {
      this.receivers = receivers;
    }); // this is calling getReceivers() function from my receiverService and that returns an observable so I have to add .subscribe function which accepts a callback that tells us what function to execute when that observable changes ie when we get data from an api.  the function makes our receivers property = whatever is passed to subscribe
  }

  select = (receiver: Receiver): void => {
    this.selectedReceiver = receiver /* this function is letting me select a receiver in my html on click and then setting my selectedReceiver variable = to whatever it is that I've selected */
  }

  ngOnInit(): void {
    this.getReceivers();
  }
}