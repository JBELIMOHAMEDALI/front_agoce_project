import { Component, OnInit } from '@angular/core';
import { Client } from '../modal/client';
import { ClientSService } from '../service/client-s.service';
import { SheredService } from '../service/shered.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  file: any;
  data: FormData;
  listClient: any[] = [];
  client: Client;
  model: any = {};
  id_clent_dellete: string = "-1";
  constructor(private shredService: SheredService, private clientservice: ClientSService,private router: Router) {
    this.data = new FormData();
    this.client = new Client("", "", "", "", "","");
  }
  ngOnInit(): void {
    this.getlistClient();
  }
  async getlistClient() {
    await this.shredService.getAllfromTab("client").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listClient = msg;
        } else {
          this.listClient = [];
        }
      }, error: (err) => {

        this.listClient = [];
      }
    })
  }
  async addClient(f: any) {
    const { nom,nom_soc, email, tel, logo, adr, fb, twet, google_link, prof_link } = f.value;
    this.data.append("name", nom)
    this.data.append("nom_soc", nom_soc)
    this.data.append("email", email)
    this.data.append("phone", tel)
    this.data.append("id_sujet", logo)
    this.data.append("address", adr)
    this.data.append("facebook", fb)
    this.data.append("twitter", twet)
    this.data.append("google_plus_link", google_link)
    this.data.append("linkedin", prof_link)
    await this.clientservice.adduser(this.data).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          swal('Success', '', 'success')
        }
        else {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
          
        }

      }, error: (err) => {
        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')

      }
    })
  }
  fileChange(event: any) {

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.file = file;
      this.data.append('file', file, file.name);
    }
  }
  update(item: any) {
    this.model.nom = item.name;
    this.model.email = item.email;
    this.model.tel = item.phone;
    this.model.adr = item.address;
    this.model.fb = item.facebook;
    this.model.twet = item.twitter;
    this.model.googl_ling = item.google_plus_link;
    this.model.prof_link = item.linkedin;
    this.client = item;
  }
  async updateclient(f: any) {
    const client = new Client(this.model.nom_soc,this.model.nom, this.model.email, this.model.tel, "", this.model.adr, this.model.fb, this.model.twet, this.model.googl_ling, this.model.prof_link, this.client.id_client)
    console.log(client);
    await this.clientservice.updateuser(client).subscribe({
      next: (data) => {
        swal('Success', '', 'success');
this.router.navigate(['clients']);
        // this.shredService.reloadComponent();
      }, error: (err) => {

        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')

      }
    })
  }
  setIdClientDeleted(id_client: string) {
    this.id_clent_dellete = id_client;
  }
  async delleteClent() {
    await this.shredService.deleteFromTab(this.id_clent_dellete, "client", "id_client").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.shredService.reloadComponent();
          swal('Success', '', 'success')
        }
        else {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      },
      error: (err) => {
        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')

      }
    })
  }
  goTo(id:string)
  {
alert(id)
  }

}
