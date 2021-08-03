import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../modal/client';

@Injectable({
  providedIn: 'root'
})
export class ClientSService {

  constructor(private httpClient: HttpClient) { }


  adduser(client: FormData) {
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Client/add_client', client);
  }

  updateuser(client: any) {
    let param1 = new HttpParams;

    param1 = param1.set("name", client.name);
    param1 = param1.set("email", client.email);
    param1 = param1.set("phone", client.phone);
    param1 = param1.set("address", client.address);
    param1 = param1.set("facebook", client.facebook.toString());
    param1 = param1.set("twitter", client.twitter);
    param1 = param1.set("google_plus_link", client.google_plus_link);
    param1 = param1.set("linkedin", client.linkedin);
    param1 = param1.set("id", client.id_client);
    return this.httpClient.post('http://127.0.0.1/p_agonce_api/Client/update_client', param1);
  }

}
