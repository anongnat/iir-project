import { Component, Inject } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AboutUsPageComponent {
  heightScreen = window.innerHeight - 2;
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
  }

}
