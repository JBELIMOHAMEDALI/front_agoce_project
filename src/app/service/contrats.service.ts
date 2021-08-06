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
    param1 = param1.set("autre", Contrat.autre);
    param1 = param1.set("lieu", Contrat.lieu);
    param1 = param1.set("date_recp", Contrat.date_recp);
    param1 = param1.set("lieu_recp", Contrat.lieu_recp);
    param1 = param1.set("avance", Contrat.avance);
    param1 = param1.set("id_devi", Contrat.id_devi);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Contrats/add_Contrats', param1);
  }
  updateContran(Contrat: Contrant) {
    let param1 = new HttpParams;
    param1 = param1.set("autre", Contrat.autre);
    param1 = param1.set("lieu", Contrat.lieu);
    param1 = param1.set("date_recp", Contrat.date_recp);
    param1 = param1.set("lieu_recp", Contrat.lieu_recp);
    param1 = param1.set("avance", Contrat.avance);
    param1 = param1.set("id_devi", Contrat.id_devi);
    param1 = param1.set("id", Contrat.id_contrat);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Contrats/update_Contrats', param1);
  }
  getAllContrant() {
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Contrats/get_all_Contrant");
  }
  getAllContrantByClient(id:string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Contrats/get_all_Contrant_by_client",{params:param1});
  }
  ///

  getAllContrantDetaile(id:string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Contrats/get_all_Contrant_Detaile",{params:param1});
  }

  getAllContrantTotale_Prix(id:string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Contrats/get_all_Contrant_totale_Prix",{params:param1});
  }
}
