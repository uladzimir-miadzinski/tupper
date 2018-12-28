import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicAreaComponent } from './graphic-area/graphic-area.component';
import { ScrollListenerDirective } from './event-handlers/scroll-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    GraphicAreaComponent,
    ScrollListenerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
