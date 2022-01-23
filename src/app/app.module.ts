import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PockedexPageComponent } from './component/pockedex-page/pockedex-page.component';
import { PockemonListComponent } from './component/pockemon-list/pockemon-list.component';
import { PockemonDetailComponent } from './component/pockemon-detail/pockemon-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreatePockemonPageComponent } from './pages/create-pockemon-page/create-pockemon-page.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PockedexPageComponent,
    PockemonListComponent,
    PockemonDetailComponent,
    CreatePockemonPageComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
