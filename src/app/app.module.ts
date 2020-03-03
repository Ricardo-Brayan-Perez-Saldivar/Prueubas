import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './Components/mi-componente/mi-componente';
import { PeliculasComponent } from './Components/peliculas/peliculas.component';
@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
