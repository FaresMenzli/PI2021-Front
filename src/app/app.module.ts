import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { OeuvreCardComponent } from './oeuvre-card/oeuvre-card.component';
import { PanierComponent } from './panier/panier.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
{ path : 'oeuvres' , component : OeuvresComponent},
{ path : 'panier' , component : PanierComponent},
/* { path : '**' , component : OeuvresComponent} */



]
@NgModule({
  declarations: [
    AppComponent,
    OeuvresComponent,
    OeuvreCardComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
