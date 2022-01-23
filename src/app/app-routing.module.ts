import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PockedexPageComponent} from "./component/pockedex-page/pockedex-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {CreatePockemonPageComponent} from "./pages/create-pockemon-page/create-pockemon-page.component";

const routes: Routes = [
  {
    path: '',
    component: PockedexPageComponent
  },
  {
    path: 'create',
    component: CreatePockemonPageComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
