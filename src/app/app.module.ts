import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
