import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SheredService } from 'src/app/service/shered.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  @Input() title:any;
  @Input() id_clent_dellete:any;

  constructor(public activeModal: NgbActiveModal,private shredService: SheredService) {}
  ngOnInit(): void {
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
