import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HandlersComponent } from './components/handlers/handlers.component';
import { HelloComponent } from './components/hello/hello.component';
import { SquareBracketsComponent } from './components/square-brackets/square-brackets.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomTypesComponent } from './components/custom-types/custom-types.component';
import { Utility } from './services/utility';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HandlersComponent,
    DirectivesComponent,
    SquareBracketsComponent,
    PipesComponent,
    CustomTypesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Utility],
  bootstrap: [AppComponent],
})
export class AppModule {}
