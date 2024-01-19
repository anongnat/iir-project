import { Component, Inject, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  url : any = '';
  private sanitizer = inject(DomSanitizer);

  constructor(){
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vQmTVrNuxAI?playlist=vQmTVrNuxAI&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0&modestbranding=1&loop=1');
  }
}