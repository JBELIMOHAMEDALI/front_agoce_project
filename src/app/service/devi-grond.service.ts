import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviGrondService {

  constructor(private httpClient: HttpClient) { }

  addDevi(id_client: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id_client",id_client);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Devi/add_Devi', param1);
  }
  getAllDevi() {
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Devi/get_all_Devi");
  }
  //
  getAllDetaileDevi(id:string) {
    let param1 = new HttpParams;
    param1 = param1.set("id",id);
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Devi/get_all_Detaile_Devi",{params:param1});
  }

  getDvisBayClient(id:string) {
    let param1 = new HttpParams;
    param1 = param1.set("id",id);
    return this.httpClient.get("http://127.0.0.1/p_agonce_api/Devi/get_Devi_bay_client",{params:param1});
  }
}
