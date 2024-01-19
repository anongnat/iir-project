import { Component,ElementRef,HostListener,Inject } from '@angular/core';
import { WINDOW } from './services/window.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iirProjectApp';
  constructor( @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window,private elem: ElementRef){
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let elements = this.elem.nativeElement.querySelectorAll('.app-nav-bar');
    if(offset > 200){
      elements[0].classList.add('test');
    }else{
      elements[0].classList.remove('test');
    }
  }
}
