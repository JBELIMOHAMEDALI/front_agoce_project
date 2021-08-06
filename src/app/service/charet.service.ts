import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharetService {

  constructor(private httpClient: HttpClient) { }
  getNbrClient() {
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Generale/nbr_client");
  }
  getNbrDevis() {
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Generale/nbr_Devis");
  }
  getNbrContra() {
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Generale/nbr_Contra");
  }
}
