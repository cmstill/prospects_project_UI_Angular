import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Receiver } from '../receiver';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receiver-detail',
  standalone: true,
  imports: [ NgIf, FormsModule ],
  templateUrl: './receiver-detail.component.html',
  styleUrl: './receiver-detail.component.css'
})
export class ReceiverDetailComponent {
  @Input() receiver: Receiver = {} as Receiver;
}
