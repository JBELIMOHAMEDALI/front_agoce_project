import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrant } from '../modal/contrant';

@Injectable({
  providedIn: 'root'
})
export class ContratsService {

  constructor(private httpClient: HttpClient) { }

  addContrant(Contrat: Contrant) {
    let param1 = new HttpParams;
    param1 = param1.set("nom", Contrat.nom);
    param1 = param1.set("soc", Contrat.soc);
    param1 = param1.set("cin", Contrat.cin);
    param1 = param1.set("tel", Contrat.tel);
    param1 = param1.set("mail", Contrat.mail);
    param1 = param1.set("objet", Contrat.objet);
    param1 = param1.set("date_travail", Contrat.date_travail);
    param1 = param1.set("autre", Contrat.autre);
    param1 = param1.set("date_recp", Contrat.date_recp);
    param1 = param1.set("lieu", Contrat.lieu);
    param1 = param1.set("lieu_recp", Contrat.lieu_recp);
    param1 = param1.set("prix", Contrat.prix);
    param1 = param1.set("avance", Contrat.avance);
    param1 = param1.set("reste", Contrat.reste);
    param1 = param1.set("date_paiement", Contrat.date_paiement);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Contrats/add_Contrats', param1);
  }
  updateContran(Contrat: any) {
    let param1 = new HttpParams;
    param1 = param1.set("nom", Contrat.nom);
    param1 = param1.set("soc", Contrat.soc);
    param1 = param1.set("cin", Contrat.cin);
    param1 = param1.set("tel", Contrat.tel);
    param1 = param1.set("mail", Contrat.mail);
    param1 = param1.set("objet", Contrat.objet);
    param1 = param1.set("date_travail", Contrat.date_travail);
    param1 = param1.set("autre", Contrat.autre);
    param1 = param1.set("date_recp", Contrat.date_recp);
    param1 = param1.set("lieu", Contrat.lieu);
    param1 = param1.set("lieu_recp", Contrat.lieu_recp);
    param1 = param1.set("prix", Contrat.prix);
    param1 = param1.set("avance", Contrat.avance);
    param1 = param1.set("reste", Contrat.reste);
    param1 = param1.set("date_paiement", Contrat.date_paiement);
    param1 = param1.set("id", Contrat.id.toString());
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Contrats/update_Contrats', param1);
  }

}
