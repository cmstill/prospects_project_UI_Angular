import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Receiver } from '../receiver';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceiverService } from '../receiver.service';

@Component({
  selector: 'app-receiver-detail',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  templateUrl: './receiver-detail.component.html',
  styleUrl: './receiver-detail.component.css'
})
export class ReceiverDetailComponent {
  @Input() receiver: Receiver = {} as Receiver;

  snackbarMessage: string = '';
  showSnackBarMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private receiverService: ReceiverService
  ) { }

  getReceiver = (): void => {
    const receiverID = this.route.snapshot.paramMap.get('id')

    if (receiverID && this.receiver) {
      this.receiverService.getReceiver(receiverID)
        .subscribe((receiver: Receiver) => {
          this.receiver = receiver;
        });
    }

  }

  updateReceiver = (): void => {
    const receiverID = this.route.snapshot.paramMap.get('id')

    if (receiverID) {
      this.receiverService.updateReceiver(receiverID, this.receiver)
        .subscribe((receiver: Receiver) => {
          this.receiver = receiver;
          this.snackbarMessage = 'Receiver Updated';
          this.showSnackBarMessage = true;

          setTimeout(() => {
            this.showSnackBarMessage = false;
          }, 3000);
        });
    }
  }

  ngOnInit(): void {
    this.getReceiver();
  }
}



