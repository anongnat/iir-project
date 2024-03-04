import { Component, Inject } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ContactPageComponent {
  heightScreen = window.innerHeight - 2;
  footer = window.innerWidth === 1920 ? (window.innerHeight > 1080 ? 654 : 532) : 0;
  constructor() {
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
    this.footer = window.innerHeight > 1080 ? 654 : 532;
  }
}
