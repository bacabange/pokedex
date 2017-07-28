import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { MaterialModule } from '@angular/material';
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { PokeapiService } from './services/pokeapi/pokeapi.service';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule,
    FormsModule,
    PolymerModule.forRoot(),
    IronElementsModule,
    PaperElementsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [
  	appRoutingProviders,
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
