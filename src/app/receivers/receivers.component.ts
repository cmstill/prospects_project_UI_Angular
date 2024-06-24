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
  receivers: Receiver[] = []; // this is what displays our list of receivers...so when we want to delete we can delete it from here

  constructor(private receiverService: ReceiverService) { } // this constructor function injects the service we created earlier into our receivers resource

  getReceivers = (): void => {
    this.receiverService.getReceivers().subscribe((receivers) => {
      this.receivers = receivers;
    }); // this is calling getReceivers() function from my receiverService and that returns an observable so I have to add .subscribe function which accepts a callback that tells us what function to execute when that observable changes ie when we get data from an api.  the function makes our receivers property = whatever is passed to subscribe
  }

  deleteReceiver = (id: string): void => {
    this.receiverService.deleteReceiver(id).subscribe((res) => {
      console.log(res);
    });
  };

  ngOnInit(): void {
    this.getReceivers();
  }
}