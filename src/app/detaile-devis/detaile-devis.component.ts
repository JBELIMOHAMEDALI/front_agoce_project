import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateDevisDetaileComponent } from '../popup/devis/add-update-devis-detaile/add-update-devis-detaile.component';
import { DeleteDevisComponent } from '../popup/devis/delete-devis/delete-devis.component';
import { DeviGrondService } from '../service/devi-grond.service';
import { SheredService } from '../service/shered.service';

@Component({
  selector: 'app-detaile-devis',
  templateUrl: './detaile-devis.component.html',
  styleUrls: ['./detaile-devis.component.css']
})
export class DetaileDevisComponent implements OnInit {
  listDevis:any[]=[];
  active_id:string;
  constructor(private route: ActivatedRoute,private deviService:DeviGrondService,private shredService: SheredService,private modalService: NgbModal) {
    const id:any = this.route.snapshot.paramMap.get('id_devis')?.toString();
    this.active_id=id.toString();
   }

  ngOnInit(): void {
    this.getAllDetaileDevis();
  }
  openAdd(){
      const modalRef = this.modalService.open(AddUpdateDevisDetaileComponent);
      modalRef.componentInstance.title = 'Add Devi';
      modalRef.componentInstance.add = true;
      modalRef.componentInstance.id = this.active_id;
  }
  openUpdateDetaile(item:any)
  {//
    const modalRef = this.modalService.open(AddUpdateDevisDetaileComponent);
    modalRef.componentInstance.title = 'update Detaile  Devi';
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.item =item;
  }

async  getAllDetaileDevis()
  {
    await this.deviService.getAllDetaileDevi(this.active_id).subscribe({
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

  openAddDelete(id:String)
  {
    const modalRef = this.modalService.open(DeleteDevisComponent);
    modalRef.componentInstance.title = 'Add Devi';
    modalRef.componentInstance.nomTab = 'devis';
    modalRef.componentInstance.id_name = 'id_devis';
    modalRef.componentInstance.id =id;

  }
}
