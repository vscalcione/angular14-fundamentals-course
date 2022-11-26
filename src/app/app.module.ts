import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandlersComponent } from './components/handlers/handlers.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { SquareBracketsComponent } from './components/square-brackets/square-brackets.component';

@NgModule({
  declarations: [
    AppComponent,
    HandlersComponent,
    DirectivesComponent,
    SquareBracketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
