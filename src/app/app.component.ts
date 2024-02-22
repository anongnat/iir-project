import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { WINDOW } from './services/window.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iirProjectApp';
  display = false;
  currentPosition = 0;
  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window, private elem: ElementRef, private router: Router) {
    if (window.location.pathname.split('/').pop() !== '') {
      this.display = true;
    }
    this.window.addEventListener("scroll", this.reveal);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let elements = this.elem.nativeElement.querySelectorAll('.app-nav-bar');
    if(offset > 200){
      elements[0].firstChild.classList.remove('home-page');
    }else{
      elements[0].firstChild.classList.add('home-page');
    }
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
}
