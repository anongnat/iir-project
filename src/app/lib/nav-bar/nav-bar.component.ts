import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() from ='';
  displaySquare = true;
  

  constructor() {
  }

  toggleButton(event: any) {
    if(document.getElementsByClassName("nav-bar")[0].classList.contains('condition-left')){
      document.getElementsByClassName("nav-bar")[0].classList.add('condition-right');
      document.getElementsByClassName("nav-bar")[0].classList.remove('condition-left');
    }else{
      document.getElementsByClassName("nav-bar")[0].classList.add('condition-left');
      document.getElementsByClassName("nav-bar")[0].classList.remove('condition-right');
    }
    if(event.currentTarget.classList.contains('svg-square')){
      this.displaySquare = false;
    }else{
      this.displaySquare = true;
    }
  }

}



