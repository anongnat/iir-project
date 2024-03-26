import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AboutUsPageComponent {
  heightScreen = window.innerHeight - 205;
  realWidth = window.innerWidth;
  constructor() {
  }

  onResize() {
    this.heightScreen = window.innerHeight - 205;
    this.realWidth = window.innerWidth;
  }

}
