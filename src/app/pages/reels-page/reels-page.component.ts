import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reels-page',
  templateUrl: './reels-page.component.html',
  styleUrls: ['./reels-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ReelsPageComponent {
  url: any = '';
  heightScreen = window.innerHeight - 2;
  private sanitizer = inject(DomSanitizer);
  constructor() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/910842295?autoplay=1&loop=1');
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  onResize() {
    this.heightScreen = window.innerHeight - 2;
  }
}
