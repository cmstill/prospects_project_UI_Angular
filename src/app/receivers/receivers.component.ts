import { Component, OnInit } from '@angular/core';
import { Receiver } from '../receiver';
import { FormsModule } from '@angular/forms';
import { ReceiverService } from '../receiver.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ReceiverDetailComponent } from '../receiver-detail/receiver-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receivers',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, ReceiverDetailComponent, RouterLink],
  templateUrl: './receivers.component.html',
  styleUrl: './receivers.component.css'
})

export class ReceiversComponent {

  selectedReceiver!: Receiver; // so here I am creating a variable selectedReceiver and setting its type to = the Receiver interface that I created in recevier.ts and then imported
  receivers: Receiver[] = []; // this is what displays our list of receivers...so when we want to delete we can delete it from here

  currentPageReceivers: Receiver[] = [];
  currentPage = 0;
  pageSize = 5;
  pageCount = 0;
  showSnackbarMessage = false;
  snackbarMessage= '';

  constructor(private receiverService: ReceiverService) { } // this constructor function injects the service we created earlier into our receivers resource

  getReceivers = (): void => {
    this.receiverService.getReceivers().subscribe((receivers) => {
      this.receivers = receivers;
      this.pageCount = Math.ceil(this.receivers.length / this.pageSize)
      this.currentPageReceivers = this.receivers.slice(0, this.pageSize);
    }); // this is calling getReceivers() function from my receiverService and that returns an observable so I have to add .subscribe function which accepts a callback that tells us what function to execute when that observable changes ie when we get data from an api.  the function makes our receivers property = whatever is passed to subscribe
  }

  previousPage = (): void => {
    this.currentPage -=1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageReceivers = this.receivers.slice( startIndex, startIndex + this.pageSize);
  }

  nextPage = (): void => {
    this.currentPage +=1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageReceivers = this.receivers.slice(startIndex, startIndex + this.pageSize);
  }

  deleteReceiver = (id: string): void => {
    this.receiverService.deleteReceiver(id).subscribe((res) => {
      this.getReceivers(); /*this invokes getWidgets so that our list refreshes after delete*/
      this.snackbarMessage = 'Deleted Receiver';
      this.showSnackbarMessage = true;

      setTimeout(() => {
        this.showSnackbarMessage = false;
      }, 3000);
      
      console.log(res);
    });
  };

  ngOnInit(): void {
    this.getReceivers();
  }
}