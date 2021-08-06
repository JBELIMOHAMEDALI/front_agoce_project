import { Component, OnInit } from '@angular/core';
import { Contrant } from '../modal/contrant';
import { ContratsService } from '../service/contrats.service';
import swal from 'sweetalert';
import { SheredService } from '../service/shered.service';
import { JsonpInterceptor } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateContratComponent } from '../popup/contrat/add-update-contrat/add-update-contrat.component';
import { DeleteDevisComponent } from '../popup/devis/delete-devis/delete-devis.component';

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
  constructor(private contrinteSrvice:ContratsService,private shredService: SheredService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getlistContinte();
  }


  async getlistContinte() {
    await this.contrinteSrvice.getAllContrant().subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listContrint = msg;

        } else {
          this.listContrint = [];
        }
      }, error: (err) => {
        this.listContrint = [];
      }
    })
  }


  open() {
    const modalRef = this.modalService.open(AddUpdateContratComponent);
    modalRef.componentInstance.title = 'Add Contrat';
    modalRef.componentInstance.add = true;
  }
  openUpdate(item:any) {

    const modalRef = this.modalService.open(AddUpdateContratComponent);
    modalRef.componentInstance.title = 'Update Contrat';
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.item = item;
    console.log(JSON.stringify(item)+"----------");

  }

  openAddDelete(id:String)
  {
    const modalRef = this.modalService.open(DeleteDevisComponent);
    modalRef.componentInstance.title = 'Supprtion  Contrat';
    modalRef.componentInstance.nomTab = 'contrats';
    modalRef.componentInstance.id_name = 'id_contrat';
    modalRef.componentInstance.id =id;

  }

  // getObject(item:any)
  // {
  //   this.model.nom=item.nom;
  //   this.model.soc=item.soc;
  //   this.model.cin=item.cin;
  //   this.model.tel=item.tel;
  //   this.model.email=item.mail;
  //   this.model.objet=item.objet;
  //   this.model.date_travail=item.date_travail;
  //   this.model.autre=item.autre;
  //   this.model.liru=item.lieu;
  //   this.model.date_recp=item.date_recp;
  //   this.model.lieu_recp=item.lieu_recp;
  //   this.model.prix=item.prix;
  //   this.model.avance=item.avance;
  //   this.model.rest=item.reste;
  //   this.model.date_paiement=item.date_paiement;
  //   this.id_contrinte=item.id;
  // }


  // delleteContra()
  // {
  //   this.shredService.deleteFromTab(this.id_contrant_delleted,"contrats","id").subscribe({next:(data)=>{
  //     swal('Success', '', 'success')

  //   },error:(err)=>{
  //     swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

  //   }})
  // }

}
