import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateDevisDetaileComponent } from '../popup/devis/add-update-devis-detaile/add-update-devis-detaile.component';
import { AddUpdateDevisComponent } from '../popup/devis/add-update-devis/add-update-devis.component';
import { DeleteDevisComponent } from '../popup/devis/delete-devis/delete-devis.component';
import { DeviGrondService } from '../service/devi-grond.service';
import { SheredService } from '../service/shered.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  listDevis: any[] = [];

  constructor(private deviService:DeviGrondService,private shredService: SheredService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getlistDevis();
  }
  async getlistDevis() {
    await this.deviService.getAllDevi().subscribe({
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

  openAdd()
  {
    const modalRef = this.modalService.open(AddUpdateDevisComponent);
    modalRef.componentInstance.title = 'Add Devis';
    modalRef.componentInstance.add = true;
  }
  openAddDetaile(id:String)
  {
    const modalRef = this.modalService.open(AddUpdateDevisDetaileComponent);
    modalRef.componentInstance.title = 'Add Detaile Devi';
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.id = id;
  }

  openAddDelete(id:String)
  {
    const modalRef = this.modalService.open(DeleteDevisComponent);
    modalRef.componentInstance.title = 'Supprtion  Devi';
    modalRef.componentInstance.nomTab = 'devi';
    modalRef.componentInstance.id_name = 'id_devi';
    modalRef.componentInstance.id =id;

  }
}
