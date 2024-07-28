import { Component } from '@angular/core';

@Component({
  selector: 'app-com-footer',
  standalone: true,
  imports: [],
  templateUrl: './com-footer.component.html',
  styleUrl: './com-footer.component.css'
})
export class ComFooterComponent {
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
