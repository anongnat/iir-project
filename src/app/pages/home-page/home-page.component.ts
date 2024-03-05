import { Component, Inject } from '@angular/core';
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
  currentPosition = 0;
  checkedSize = window.innerWidth < 768 ? 2 : 5;
  reduceHeight = this.checkBottomVsign();
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

  checkBottomVsign(){
    let reduce = window.innerWidth < 427 ? 24 : 50;
    if(window.innerWidth === 1920 && window.innerHeight === 1200){
      reduce = 170;
    }else if(window.innerWidth === 1680 && window.innerHeight === 1050){
      reduce = 160;
    }else if(window.innerWidth === 1440 && window.innerHeight === 900){
      reduce = 140;
    }else if(window.innerWidth === 1280 && window.innerHeight === 800){
      reduce = 140;
    }else if(window.innerWidth === 1024 && window.innerHeight === 768){
      reduce = 140;
    }else if(window.innerWidth === 1024 && window.innerHeight === 600){
      reduce = 60;
    }
    return reduce;
  }
}