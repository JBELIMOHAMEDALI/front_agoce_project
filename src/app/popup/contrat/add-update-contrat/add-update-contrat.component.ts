import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contrant } from 'src/app/modal/contrant';
import { ContratsService } from 'src/app/service/contrats.service';
import { DeviGrondService } from 'src/app/service/devi-grond.service';
import { SheredService } from 'src/app/service/shered.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-contrat',
  templateUrl: './add-update-contrat.component.html',
  styleUrls: ['./add-update-contrat.component.css']
})
export class AddUpdateContratComponent implements OnInit {

  @Input() title: any;
  model: any = {};
  file: any;
  listDevis: any[] = [];
  @Input() add: any;
  @Input() item: any;
  client_list: any[] = [];
  constructor(public activeModal: NgbActiveModal, private serviceContra: ContratsService, private shredService: SheredService, private deviServ: DeviGrondService) { }
  ngOnInit(): void {
    this.getALLListClient();
    if(this.add)
    {
      this.model={};
    }
    else{
      this.getListDevis(this.item.id_client);
      this.model.client=this.item.id_client;
      this.model.id_devi=this.item.id_devi;
      this.model.autre=this.item.autre;
      this.model.lieu=this.item.lieu;
      this.model.date_recp=this.item.date_recp;
      this.model.lieu_recp=this.item.lieu_recp;
      this.model.prix=this.item.prix;
      this.model.avance=this.item.avance;
    }
  }
  onChange(id_client: any) {
    this.getListDevis(id_client.value.toString());
  }
  async getListDevis(id: string) {
    await this.deviServ.getDvisBayClient(id).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listDevis = msg;
          console.log(msg);

        } else {
          this.listDevis = [];
        }
      }, error: (err) => {
        this.listDevis = [];

      }
    })
  }
  async getALLListClient() {
    await this.shredService.getAllfromTab("client").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.client_list = msg;
          console.log(msg);

        } else {
          this.client_list = [];
        }
      }, error: (err) => {
        this.client_list = [];

      }
    })
  }
  async mangContrinte(f: any) {
    const { autre, lieu, date_recp, lieu_recp, prix, avance, id_devi } = f.value;
    // const Rest = Number(prix) - Number(avance) || "0";
    if (this.add) {
      const contra = new Contrant(autre, lieu, date_recp, lieu_recp, avance, "", id_devi)
      await this.serviceContra.addContrant(contra).subscribe({
        next: (data) => {
          const donne: any = data;
          const msg = donne.msg;
          const error = donne.errorer;
          if (!error) {
            swal('Success', '', 'success');
            this.activeModal.dismiss();
            this.shredService.reloadComponent()
          }
          else {
            this.activeModal.dismiss();
            swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
          }
        }, error: (err) => {
          this.activeModal.dismiss();
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      })
    } else {
      const c = new Contrant(autre, lieu, date_recp, lieu_recp, avance, "", id_devi, this.item.id_contrat)
      await this.serviceContra.updateContran(c).subscribe({
        next: (data) => {
          this.activeModal.dismiss();
          this.shredService.reloadComponent()

          swal('Success', '', 'success')
        }, error: (err) => {
          this.activeModal.dismiss();
          this.shredService.reloadComponent()
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      })
    }
  }
}
