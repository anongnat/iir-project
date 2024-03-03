import { Component, ElementRef, HostListener, Inject, ViewChild, inject } from '@angular/core';
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
  @ViewChild('mySelector')
  element!: ElementRef;
  url: any = '';
  private sanitizer = inject(DomSanitizer);
  currentPosition = 0;
  checkedSize = window.innerWidth < 768 ? 2 : 5;
  reduceHeight = window.innerWidth < 427 ? 24 : 100;
  // widthScreen = "width :" + window.innerWidth + "px;";
  widthImg = "width :" + ((window.innerWidth / this.checkedSize)) + "px;";
  widthhh = (window.innerWidth / this.checkedSize);
  widthScreen = window.innerWidth;
  heightScreen = "height:" +  window.innerHeight + "px;";
  bottomSign = "top:" +  (window.innerHeight - this.reduceHeight) + "px;";
  

  constructor(@Inject(WINDOW) private windows: Window) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/910841514?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&#t=235s&controls=0');
    this.windows.addEventListener("scroll", this.reveal);
    this.onResize();
    console.log(this.widthScreen,this.widthImg);
    console.log(this.reduceHeight);
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
    this.widthScreen = window.innerWidth ;
    this.widthImg = "width :" + ((window.innerWidth / this.checkedSize)) + "px;";
    this.heightScreen = "height:" +  window.innerHeight + "px;";
    this.bottomSign = "top:" +  (window.innerHeight - this.reduceHeight) + "px;";
    this.widthhh = (window.innerWidth / this.checkedSize);
    console.log(window.innerWidth);
    console.log(this.reduceHeight);
   
  }
}