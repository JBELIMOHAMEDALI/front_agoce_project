import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devis } from '../modal/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private httpClient: HttpClient) { }

  addDevis(devis: any) {
    let param1 = new HttpParams;
    //``, `info`, `qte`, `puht`, `tva`, `tht`, `date_devis

    param1 = param1.set("id_devi_g", devis.id_devi_g);
    param1 = param1.set("info", devis.info);
    param1 = param1.set("qte", devis.qte);
    param1 = param1.set("puht", devis.puht);
    param1 = param1.set("tva", devis.tva);
    param1 = param1.set("tht", devis.tht);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Devis/add_Devis', param1);
  }
  updateDevis(devis: any) {
    let param1 = new HttpParams;
    param1 = param1.set("id_devi_g", devis.id_devi_g);
    param1 = param1.set("info", devis.info);
    param1 = param1.set("qte", devis.qte);
    param1 = param1.set("puht", devis.puht);
    param1 = param1.set("tva", devis.tva);
    param1 = param1.set("tht", devis.tht);
    param1 = param1.set("id", devis.id_devis);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Devis/update_Devis', param1);
  }

  //
}
