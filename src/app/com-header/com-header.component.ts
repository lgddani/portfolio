import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-com-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './com-header.component.html',
  styleUrl: './com-header.component.css'
})

export class ComHeaderComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  redirectToEmail() {
    var email = 'rdanienriquez01@gmail.com';
    var mailtoLink = 'mailto:' + email;
    window.location.href = mailtoLink;
  }
}