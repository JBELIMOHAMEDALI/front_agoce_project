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
import { TestComponent } from './test/test.component';
import { AddUpdateClientComponent } from './popup/client/add-update-client/add-update-client.component';
import { DeleteClientComponent } from './popup/client/delete-client/delete-client.component';
import { AddUpdateContratComponent } from './popup/contrat/add-update-contrat/add-update-contrat.component';
import { DeleteContratComponent } from './popup/contrat/delete-contrat/delete-contrat.component';
import { AddUpdateDevisComponent } from './popup/devis/add-update-devis/add-update-devis.component';
import { DeleteDevisComponent } from './popup/devis/delete-devis/delete-devis.component';
import { AddUpdateDevisDetaileComponent } from './popup/devis/add-update-devis-detaile/add-update-devis-detaile.component';

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
    ViewContratComponent,
    TestComponent,
    AddUpdateClientComponent,
    DeleteClientComponent,
    AddUpdateContratComponent,
    DeleteContratComponent,
    AddUpdateDevisComponent,
    DeleteDevisComponent,
    AddUpdateDevisDetaileComponent
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
