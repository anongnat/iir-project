import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  displaySquare = true;

  constructor() {
  }

  toggleButton(event: any) {
    console.log(event.currentTarget);
    if(event.currentTarget.classList.contains('svg-square')){
      this.displaySquare = false;
    }else{
      this.displaySquare = true;
    }
    console.log(this.displaySquare);
  }

}



