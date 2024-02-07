import { Component, Inject } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-reels-page',
  templateUrl: './reels-page.component.html',
  styleUrls: ['./reels-page.component.scss']
})
export class ReelsPageComponent {
  constructor(@Inject(WINDOW) private window: Window) {
    //this.window.addEventListener("scroll", this.reveal);
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
}
