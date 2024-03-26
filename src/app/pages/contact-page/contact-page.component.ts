import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ContactPageComponent {
  heightScreen = window.innerHeight - 205;
  constructor() {
  }

  onResize() {
    this.heightScreen = window.innerHeight - 205;
  }
}
