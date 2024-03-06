import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class FooterComponent {
  @Input() from ='';
  widthScreen = window.innerWidth;

  onResize() {
    this.widthScreen = window.innerWidth;
  }
}
