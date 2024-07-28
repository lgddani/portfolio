import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComHeaderComponent } from "./com-header/com-header.component";
import { ComHomeComponent } from './com-home/com-home.component';
import { ComServicesComponent } from './com-services/com-services.component';
import { ComProjectsComponent } from './com-projects/com-projects.component';
import { ComExperienceComponent } from './com-experience/com-experience.component';
import { ComCertificatesComponent } from './com-certificates/com-certificates.component';
import { ComFooterComponent } from './com-footer/com-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ComHeaderComponent, 
    ComHomeComponent, 
    ComServicesComponent,
    ComProjectsComponent,
    ComExperienceComponent,
    ComCertificatesComponent,
    ComFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Daniel Enriquez - Portfolio';
}
