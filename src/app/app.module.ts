import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatosPoligonoComponent } from './geometria/datos-poligono.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DatosPoligonoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
