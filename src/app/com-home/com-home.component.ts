import { Component} from '@angular/core';

@Component({
  selector: 'app-com-home',
  standalone: true,
  imports: [],
  templateUrl: './com-home.component.html',
  styleUrl: './com-home.component.css'
})
export class ComHomeComponent{
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
