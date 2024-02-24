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
    console.log(event.currentTarget, document.getElementsByClassName("conditionalText")[0],document.getElementsByClassName("right")[0]);
    if(event.currentTarget.classList.contains('svg-square')){
      this.displaySquare = false;
    }else{
      this.displaySquare = true;
    }

    // if(document.getElementsByClassName("condition-left")[0] != undefined){
    //   document.getElementsByClassName("condition-left")[0].classList.add('condition-right');
    //   document.getElementsByClassName("condition-left")[0].classList.remove('condition-left');
    // }else{
    //   document.getElementsByClassName("condition-right")[0].classList.add('condition-left');
    //   document.getElementsByClassName("condition-right")[0].classList.remove('condition-right');
    // }
    console.log(this.displaySquare);
  }

}



