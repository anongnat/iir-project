import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReelsPageComponent } from './pages/reels-page/reels-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'reel',
    component: ReelsPageComponent,
    title: 'Reel',
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent,
    title: 'About us',
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title: 'Contact',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
