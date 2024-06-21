import { Component } from '@angular/core';
import { Receiver } from '../receiver';
import { FormsModule } from '@angular/forms';
import { RECEIVERS } from '../mock-receivers';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-receivers',
  standalone: true,
  imports: [ FormsModule, NgFor, NgIf],
  templateUrl: './receivers.component.html',
  styleUrl: './receivers.component.css'
})

export class ReceiversComponent {

// receiver: Receiver = {
//   id: '1',
//   name: 'HARDCODED RECEIVER',
//   production: {
//     ytpa: 1.92,
//     targetShare: 29,
//     boy: 2,
//     dom: 29
//   },
//   pedigree: {
//     capital: 14,
//     film: 6.64,
//     declare: 3,
//     rivals: 5,
//     confrence: 'SEC'
//   },
//   physical: {
//     height: 6010,
//     weight: 209,
//     ras: 9.94
//   }

//   };

selectedReceiver: Receiver = {} as Receiver; // so here I am creating a variable selectedReceiver and setting its type to = the Receiver interface that I created in recevier.ts and then imported

  select = (receiver: Receiver): void => {
    this.selectedReceiver = receiver /* this function is letting me select a receiver in my html on click and then setting my selectedReceiver variable = to whatever it is that I've selected */
}


receivers = RECEIVERS;
}