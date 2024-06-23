import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReceiversComponent } from './receivers/receivers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReceiversComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prospects-Project-UI';
  welcomeMessage = 'hello! welcome to my very cool app!'
}
