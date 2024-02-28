import { Component, Inject, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-reels-page',
  templateUrl: './reels-page.component.html',
  styleUrls: ['./reels-page.component.scss']
})
export class ReelsPageComponent {
  url: any = '';
  private sanitizer = inject(DomSanitizer);
  constructor(@Inject(WINDOW) private window: Window) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/910842295?autoplay=1&loop=1');
    //this.window.addEventListener("scroll", this.reveal);
    // const video: HTMLVideoElement = this.videoElement.nativeElement;
    // video.play();
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
