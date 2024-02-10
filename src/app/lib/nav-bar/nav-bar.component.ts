import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(){
  }

  toggleButton(event : any) {
    console.log(event.currentTarget,event.currentTarget.attributes);
    //console.log(document.getElementsByClassName("svg-square"))
    document.getElementsByClassName("svg-square");
  }

}



