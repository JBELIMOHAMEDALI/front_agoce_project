import { Component, OnInit } from '@angular/core';
import { Contrant } from '../modal/contrant';
import { ContratsService } from '../service/contrats.service';
import swal from 'sweetalert';
import { SheredService } from '../service/shered.service';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  listContrint: any[] = [];
  model:any={};
  id_contrinte:string="-1";
  id_contrant_delleted:string="-1";
  constructor(private contrinteSrvice:ContratsService,private shredService: SheredService,) { }

  ngOnInit(): void {
    this.getlistContinte();
  }
  async addContra(f:any)
  {
    const {nom, soc, cin, tel, email, objet, date_travail, autre, liru, date_recp, lieu_recp, prix, avance, rest, date_paiement}=f.value;
    const c = new Contrant(nom,soc,cin,tel,email,objet,date_travail, autre, liru, date_recp, lieu_recp, prix, avance, rest, date_paiement)

   await this.contrinteSrvice.addContrant(c).subscribe({next:(data)=>{
      swal('Success', '', 'success')
    },error:(err)=>{
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    }})
  }

  async getlistContinte() {
    await this.shredService.getAllfromTab("contrats").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listContrint = msg;
          console.log(msg);
          
        } else {
          this.listContrint = [];
        }
      }, error: (err) => {

        this.listContrint = [];
      }
    })
  }

  getObject(item:any)
  { 
    this.model.nom=item.nom;
    this.model.soc=item.soc;
    this.model.cin=item.cin;
    this.model.tel=item.tel;
    this.model.email=item.mail;
    this.model.objet=item.objet;
    this.model.date_travail=item.date_travail;
    this.model.autre=item.autre;
    this.model.liru=item.lieu;
    this.model.date_recp=item.date_recp;
    this.model.lieu_recp=item.lieu_recp;
    this.model.prix=item.prix;
    this.model.avance=item.avance;
    this.model.rest=item.reste;
    this.model.date_paiement=item.date_paiement;
    this.id_contrinte=item.id;
  }

  async updateContra(fn:any)
  {
    const {nom, soc, cin, tel, email, objet, date_travail, autre, liru, date_recp, lieu_recp, prix, avance, rest, date_paiement}=fn.value;
    const c = new Contrant(nom,soc,cin,tel,email,objet,date_travail, autre, liru, date_recp, lieu_recp, prix, avance, rest, date_paiement,this.id_contrinte)
   await this.contrinteSrvice.updateContran(c).subscribe({next:(data)=>{
      swal('Success', '', 'success')
    },error:(err)=>{
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    }})
  }
  setIdClientDeleted(id:string)
  {
    this.id_contrant_delleted=id;
  }
  delleteContra()
  {
    this.shredService.deleteFromTab(this.id_contrant_delleted,"contrats","id").subscribe({next:(data)=>{
      swal('Success', '', 'success')

    },error:(err)=>{
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

    }})
  }

}
