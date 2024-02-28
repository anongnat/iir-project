import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReelsPageComponent } from './pages/reels-page/reels-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { NavBarComponent } from './lib/nav-bar/nav-bar.component';
import { WINDOW_PROVIDERS } from "./services/window.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReelsPageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
