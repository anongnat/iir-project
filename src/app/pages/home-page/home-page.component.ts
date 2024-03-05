import { Component, Inject, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HomePageComponent {
  url: any = '';
  private sanitizer = inject(DomSanitizer);
  currentPosition = 0;
  checkedSize = window.innerWidth < 768 ? 2 : 5;
  reduceHeight = window.innerWidth < 427 ? 24 : 100;
  widthPic = (window.innerWidth / this.checkedSize) - 3;
  widthScreen = window.innerWidth - 15;
  heightScreen = "height:" +  window.innerHeight + "px;";
  bottomSign = "top:" +  (window.innerHeight - this.reduceHeight) + "px;";
  

  constructor(@Inject(WINDOW) private windows: Window) {
    this.windows.addEventListener("scroll", this.reveal);
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var scrollStatus = '';
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      scrollStatus = 'scrollDown';
    } else {
      scrollStatus = 'scrollUp';
    }
    this.currentPosition = scroll;
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  onResize() {
    this.checkedSize = window.innerWidth < 768 ? 2 : 5;
    this.widthScreen = window.innerWidth - 15 ;
    this.heightScreen = "height:" +  window.innerHeight + "px;";
    this.bottomSign = "top:" +  (window.innerHeight - this.reduceHeight) + "px;";
    this.widthPic = (window.innerWidth / this.checkedSize) - 3;
  }
}