import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/modal/client';
import { ClientSService } from 'src/app/service/client-s.service';
import { SheredService } from 'src/app/service/shered.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-client',
  templateUrl: './add-update-client.component.html',
  styleUrls: ['./add-update-client.component.css']
})
export class AddUpdateClientComponent implements OnInit {
  model: any = {};
  
  data: FormData;
  file: any;

  @Input() title:any;
  @Input() add:any;
  @Input() item:any;

  constructor(public activeModal: NgbActiveModal, private clientservice: ClientSService,private shredService: SheredService) {
    this.data = new FormData();

  }

  ngOnInit(): void {
    if(this.add==true)
    {
      this.model={};
    }else{
      console.log(this.item);
      
      this.model.nom = this.item.name;
      this.model.email = this.item.email;
      this.model.tel = this.item.phone;
      this.model.nom_soc=this.item.nom_soc;
      this.model.adr = this.item.address;
      if(this.item.facebook =="undefined"){ this.model.fb=" "}
      else{this.model.fb=this.item.facebook;}
      if(this.item.twitter =="undefined"){ this.model.twet=" "}
      else{this.model.twet = this.item.twitter}
      if(this.item.google_plus_link =="undefined"){ this.model.googl_ling=" "}
      else{this.model.googl_ling = this.item.google_plus_link}
      if(this.item.linkedin =="undefined"){ this.model.prof_link=" "}
      else{this.model.prof_link = this.item.linkedin}

    }
  }
 async  mangClient(f:any)
  { if(this.add){
    this.data.append("name", this.model.nom)
    this.data.append("nom_soc", this.model.nom_soc)
    this.data.append("email", this.model.email)
    this.data.append("phone",  this.model.tel)
    this.data.append("address", this.model.adr)
    this.data.append("facebook", this.model.fb)
    this.data.append("twitter", this.model.twet)
    this.data.append("google_plus_link", this.model.googl_ling)
    this.data.append("linkedin", this.model.prof_link)
    await this.clientservice.adduser(this.data).subscribe({
      next: (data) => {
// import swal from 'sweetalert';

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

        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')

      }
    }) 
  }else{
    const client = new Client(this.model.nom_soc,this.model.nom, this.model.email, this.model.tel, "", this.model.adr, this.model.fb, this.model.twet, this.model.googl_ling, this.model.prof_link, this.item.id_client)
    console.log(client);
    await this.clientservice.updateuser(client).subscribe({
      next: (data) => {
        this.activeModal.dismiss();

        swal('Success', '', 'success');
        this.shredService.reloadComponent();
      }, error: (err) => {
        this.activeModal.dismiss();

        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')
      }
    })

  }
  }
  fileChange(event: any) {

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.file = file;
      this.data.append('file', file, file.name);
    }
  }


  async updateclient(f: any) {
    const client = new Client(this.model.nom_soc,this.model.nom, this.model.email, this.model.tel, "", this.model.adr, this.model.fb, this.model.twet, this.model.googl_ling, this.model.prof_link, this.item.id_client)
    console.log(client);
    await this.clientservice.updateuser(client).subscribe({
      next: (data) => {
        swal('Success', '', 'success');
        // this.shredService.reloadComponent();
      }, error: (err) => {

        swal('warning', 'Quelque chose ne fonctionne pas', 'warning')
      }
    })
  }
}
