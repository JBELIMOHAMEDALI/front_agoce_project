import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SheredService } from 'src/app/service/shered.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-delete-devis',
  templateUrl: './delete-devis.component.html',
  styleUrls: ['./delete-devis.component.css']
})
export class DeleteDevisComponent implements OnInit {

  @Input() title:any;
  @Input() id:any;
  @Input() nomTab:any;
  @Input() id_name:any;
  constructor(public activeModal: NgbActiveModal,private shredService: SheredService) {}
  ngOnInit(): void {
  }
  async delleteDevis() {
    await this.shredService.deleteFromTab(this.id,this.nomTab.toString(),this.id_name.toString()).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.shredService.reloadComponent();
          swal('Success', '', 'success')
          this.activeModal.dismiss();
        }
        else {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
          this.activeModal.dismiss();

        }
      },
      error: (err) => {
        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')
        this.activeModal.dismiss();


      }
    })
  }
}
