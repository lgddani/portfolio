import { Component, ViewEncapsulation } from '@angular/core';
import { projectsList } from './projects.mock';

@Component({
  selector: 'app-com-projects',
  standalone: true,
  imports: [],
  templateUrl: './com-projects.component.html',
  styleUrl: './com-projects.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ComProjectsComponent {
  projectsList = projectsList;
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
