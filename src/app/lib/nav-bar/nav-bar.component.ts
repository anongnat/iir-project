import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavBarComponent {
  @Input() from = '';
  displaySquare = true;
  widthScreen = this.checkWidth();


  constructor() {
  }

  toggleButton(event: any) {
    if (event.currentTarget.classList.contains('svg-square')) {
      this.displaySquare = false;
    } else {
      this.displaySquare = true;
    }
  }

  onResize() {
    this.widthScreen = this.checkWidth();
  }

  checkWidth() {
    let width = window.innerWidth;
    return width;
  }

}



