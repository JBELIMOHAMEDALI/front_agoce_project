import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { ContratsComponent } from './contrats/contrats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetaileDevisComponent } from './detaile-devis/detaile-devis.component';
import { DevisComponent } from './devis/devis.component';
import { ErreurComponent } from './erreur/erreur.component';
import { LoginComponent } from './login/login.component';
import { ViewContratComponent } from './view-contrat/view-contrat.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'clients', component: ClientsComponent},
  {path:'contrats', component: ContratsComponent},
  {path:'devis', component: DevisComponent},
  {path:'detaile-devis/:id_devis', component: DetaileDevisComponent},
  {path:'client/:id_client', component: ClientComponent},

  {path:'view-contrat/:id/:type', component: ViewContratComponent},



  {path: '**', component: ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
