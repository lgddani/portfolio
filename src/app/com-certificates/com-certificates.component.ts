import { Component, ViewEncapsulation, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { certificatesList } from './certificates.mock';

@Component({
  selector: 'app-com-certificates',
  standalone: true,
  imports: [],
  templateUrl: './com-certificates.component.html',
  styleUrl: './com-certificates.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ComCertificatesComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const modal = this.el.nativeElement.querySelector('#myModal');
    const modalImg = this.el.nativeElement.querySelector('#modalImg');
    const projectsCards = this.el.nativeElement.querySelectorAll('.img-certificates');
    const closeModal = this.el.nativeElement.querySelector('.close');

    projectsCards.forEach((card: HTMLElement) => {
      this.renderer.listen(card, 'click', () => {
        this.renderer.setStyle(modal, 'display', 'block');
        modalImg.src = card.querySelector('img')!.src;
      });
    });

    this.renderer.listen(closeModal, 'click', () => {
      this.renderer.setStyle(modal, 'display', 'none');
    });

    this.renderer.listen('window', 'click', (event) => {
      if (event.target === modal) {
        this.renderer.setStyle(modal, 'display', 'none');
      }
    });
  }

  certificateList = certificatesList;
}