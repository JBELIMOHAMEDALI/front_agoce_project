import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ContratsComponent } from './contrats/contrats.component';
import { DevisComponent } from './devis/devis.component';
import { ClientComponent } from './client/client.component';
import { ViewContratComponent } from './view-contrat/view-contrat.component';
import { NgxPrintModule } from 'ngx-print';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ErreurComponent,
    HeaderComponent,
    ClientsComponent,
    ContratsComponent,
    DevisComponent,
    ClientComponent,
    ViewContratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule
    ,HttpClientModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
