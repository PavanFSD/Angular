import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponenetComponent } from './child-componenet/child-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponenetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
