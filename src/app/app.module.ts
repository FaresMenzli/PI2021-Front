import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { OeuvreCardComponent } from './oeuvre-card/oeuvre-card.component';
import { PanierComponent } from './panier/panier.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EspaceClientComponent } from './espace-client/espace-client.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';

const routes: Routes = [
  /* { path : 'oeuvres' , component : OeuvresComponent,  },
{ path : 'panier' , component : PanierComponent ,}, */
  {
    path: 'client',
    component: EspaceClientComponent,
    children: [
      { path: 'oeuvres', component: OeuvresComponent },
      { path: 'panier', component: PanierComponent },
    ],
  },
  { path: 'admin', component: EspaceAdminComponent },

  /* { path : '**' , component : OeuvresComponent} */
];
@NgModule({
  declarations: [
    AppComponent,
    OeuvresComponent,
    OeuvreCardComponent,
    PanierComponent,
    EspaceClientComponent,
    EspaceAdminComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
