import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameDisplayComponentComponent } from './name-display-component/name-display-component.component';
import { AgeDisplayComponentComponent } from './age-display-component/age-display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NameDisplayComponentComponent,
    AgeDisplayComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
