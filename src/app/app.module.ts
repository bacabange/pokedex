import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
=======
import { routing, appRoutingProviders} from './app.routing';
import { MaterialModule } from '@angular/material';
>>>>>>> 727057745a7fce93da5357d0d170715bd1e783e7

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    routing,
    MaterialModule
  ],
  providers: [
  	appRoutingProviders
>>>>>>> 727057745a7fce93da5357d0d170715bd1e783e7
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
