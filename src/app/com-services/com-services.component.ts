import { Component } from '@angular/core';
import { servicesList } from './services.mock';

@Component({
  selector: 'app-com-services',
  standalone: true,
  imports: [],
  templateUrl: './com-services.component.html',
  styleUrl: './com-services.component.css'
})
export class ComServicesComponent {
  servicesList = servicesList;
}
