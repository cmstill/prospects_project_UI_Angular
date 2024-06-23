import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { Receiver } from '../receiver';
import { ReceiverService } from '../receiver.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  receivers: Receiver[] = [];

  constructor(private receiverService: ReceiverService) { }

  getReceiversByDom = (): void => {
    this.receiverService.getReceivers().subscribe((receivers) => {
      this.receivers = receivers
    });
  } // right now this is just showing names...I eventually want it to display dominator along with name in ascending order...and then for real display grade along with name in ascending order

  ngOnInit(): void {
    this.getReceiversByDom()
  }
}