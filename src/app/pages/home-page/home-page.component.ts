import { Component, HostListener, Inject, inject } from '@angular/core';
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
  widthScreen = "width :" + window.innerWidth + "px;";
  widthImg = "width :" + ((window.innerWidth / this.checkedSize)) + "px;";
  heightScreen = "height:" +  window.innerHeight + "px;";
  // divStyle = 0;
  // marginLeft = 0;
  

  constructor(@Inject(WINDOW) private windows: Window) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/910841514?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&#t=235s&controls=0');
    this.windows.addEventListener("scroll", this.reveal);
    console.log(this.heightScreen);
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
   
    // this.marginLeft = document.getElementsByClassName('first-pic')[0].getBoundingClientRect();
    this.checkedSize = window.innerWidth < 768 ? 2 : 5;
    this.widthScreen = "width :" + window.innerWidth + "px;";
    this.widthImg = "width :" + ((window.innerWidth / this.checkedSize)) + "px;";
    this.heightScreen = "height:" +  window.innerHeight + "px;";
    console.log(this.heightScreen);
   
  }

  // ngAfterViewInit() {
  //   console.log(this.marginLeft);
  //   this.divStyle = this.marginLeft; 
  // }
}