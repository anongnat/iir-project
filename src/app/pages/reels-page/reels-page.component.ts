import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-reels-page',
  templateUrl: './reels-page.component.html',
  styleUrls: ['./reels-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ReelsPageComponent {
  heightScreen = window.innerHeight - 205;
  constructor() {
  }

  onResize() {
    this.heightScreen = window.innerHeight - 205;
  }
}
