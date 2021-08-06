import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Devis } from 'src/app/modal/devis';
import { DevisService } from 'src/app/service/devis.service';
import { SheredService } from 'src/app/service/shered.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-add-update-devis-detaile',
  templateUrl: './add-update-devis-detaile.component.html',
  styleUrls: ['./add-update-devis-detaile.component.css']
})
export class AddUpdateDevisDetaileComponent implements OnInit {

  @Input() title: any;
  @Input() id: any;
  @Input() add: any;
  model: any = {};
  @Input() item: any;

  constructor(public activeModal: NgbActiveModal, private servuceDevis: DevisService, private shredService: SheredService) { }

  ngOnInit(): void {
    if (this.add) {
      this.model = {}
    }
    else {
      this.model.info = this.item.info;
      this.model.qte = this.item.qte;
      this.model.puht = this.item.puht;
      this.model.tva = this.item.tva;
      this.model.tht = this.item.tht;
    }
  }
  async MAngDevi(f: any) {
    const { info, qte, puht, tva, tht } = f.value;
    if (this.add) {
      const devis = new Devis(info, qte, puht, tva, tht, this.id)
      await this.servuceDevis.addDevis(devis).subscribe({
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
    }
    else {
      const devis = new Devis(info, qte, puht, tva, tht, this.item.id_devi_g, this.item.id_devis)
      await this.servuceDevis.updateDevis(devis).subscribe({
        next: (data) => {
          this.activeModal.dismiss();
          swal('Success', '', 'success');
          this.shredService.reloadComponent();
        }, error: (err) => {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

        }
      })






    }
  }
}

