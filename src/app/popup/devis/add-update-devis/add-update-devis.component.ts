import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientSService } from 'src/app/service/client-s.service';
import { DeviGrondService } from 'src/app/service/devi-grond.service';
import { DevisService } from 'src/app/service/devis.service';
import { SheredService } from 'src/app/service/shered.service';
  import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-devis',
  templateUrl: './add-update-devis.component.html',
  styleUrls: ['./add-update-devis.component.css']
})
export class AddUpdateDevisComponent implements OnInit {

  @Input() title:any;
  @Input() add:any;
  client_list:any[] = [];
  constructor(public activeModal: NgbActiveModal,private sharedService:SheredService,private deviService:DeviGrondService) {}

  ngOnInit(): void {
    this.getALLListClient();
  }
async getALLListClient()
{
await this.sharedService.getAllfromTab("client").subscribe({next:(data)=>{
  const donne: any = data;
  const msg = donne.msg;
  const error = donne.errorer;
  if (!error) {
    this.client_list = msg;
    console.log(msg);
    
  } else {
    this.client_list = [];
  }
},error:(err)=>{
  this.client_list = [];

}})
}

async mangdevi(f:any)
{
await this.deviService.addDevi(f.value.client).subscribe({next:(data)=>{
  const donne: any = data;
  const msg = donne.msg;
  const error = donne.errorer;
  if (!error) {
    swal('Success', '', 'success');
    this.activeModal.dismiss();
    this.sharedService.reloadComponent()
  }
  else {
    this.activeModal.dismiss();
    swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
  }

},error:(err)=>{
  swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

}})
}
}
