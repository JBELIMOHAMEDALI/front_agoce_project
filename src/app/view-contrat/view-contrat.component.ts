import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratsService } from '../service/contrats.service';
import { DeviGrondService } from '../service/devi-grond.service';

@Component({
  selector: 'app-view-contrat',
  templateUrl: './view-contrat.component.html',
  styleUrls: ['./view-contrat.component.css']
})
export class ViewContratComponent implements OnInit {
  titre: string = "Facture"//
  active_id: any
  type: any;
  listData: any[] = []
  avonce: any = "";
  prixtotContra: any = "";

  constructor(private route: ActivatedRoute, private contraServ: ContratsService,private deviServ:DeviGrondService) {
    const id: any = this.route.snapshot.paramMap.get('id')?.toString();
    const type: any = this.route.snapshot.paramMap.get('type')?.toString();
    this.active_id = id.toString();
    this.type = type.toString();
    if (type == "c") { this.titre = "contrat" }
    if (type == "d") { this.titre = "Devis" }
  }

  ngOnInit(): void {
    if (this.type == "c") { this.getdetaileContra(this.active_id);this.getAllPrixContrat(this.active_id) }
    else if (this.type == "d") { this.getdetaileDevis(this.active_id);this.getAllPrixTotDevis(this.active_id) }
  }
  async getdetaileDevis(id: string) {
    this.listData = []

    await this.deviServ.getDvisDetaile_Print(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listData = msg;
        } else {
          this.listData = [];
        }
      }, error: (err) => {
        this.listData = [];
      }
    })
  }
  async getdetaileContra(id: string) {
    this.listData = []

    await this.contraServ.getAllContrantDetaile(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listData = msg;
          this.avonce = "0";
          this.avonce = msg[0].avance;
          console.log(this.listData, "-----", this.avonce);

        } else {
          this.listData = [];
        }
      }, error: (err) => {
        this.listData = [];
      }
    })
  }

  async getAllPrixContrat(id: string) {
    await this.contraServ.getAllContrantTotale_Prix(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {

          this.prixtotContra = msg[0].tt;

        } else {
          this.prixtotContra = "0";
        }
      }, error: (err) => {
        this.prixtotContra = "0";

      }
    })
  }

  async getAllPrixTotDevis(id: string) {
    await this.deviServ.getDvisTot_prix(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {

          this.prixtotContra = msg[0].tt;

        } else {
          this.prixtotContra = "0";
        }
      }, error: (err) => {
        this.prixtotContra = "0";

      }
    })
  }
}
