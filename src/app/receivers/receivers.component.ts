import { Component } from '@angular/core';
import { Receiver } from '../receiver';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receivers',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './receivers.component.html',
  styleUrl: './receivers.component.css'
})
export class ReceiversComponent {
receiver: Receiver = {
  id: 'idstring',
  name: 'testy mctesterson',
  production: {
    ytpa: 1.92,
    targetShare: 29,
    boy: 2,
    dom: 29
  },
  pedigree: {
    capital: 14,
    film: 6.64,
    declare: 3,
    rivals: 5,
    confrence: 'SEC'
  },
  physical: {
    height: 6010,
    weight: 209,
    ras: 9.94
  }
}

test = 'hello'
}
