import { Component, OnInit } from '@angular/core';
import { Client } from '../modal/client';
import { ClientSService } from '../service/client-s.service';
import { SheredService } from '../service/shered.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from '../test/test.component';
import { AddUpdateClientComponent } from '../popup/client/add-update-client/add-update-client.component';
import { DeleteClientComponent } from '../popup/client/delete-client/delete-client.component';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  listClient: any[] = [];
  client: Client;
  model: any = {};
  id_clent_dellete: string = "-1";
  constructor(private shredService: SheredService, private clientservice: ClientSService,private modalService: NgbModal) {
    this.client = new Client("", "", "", "", "","");
  }
  ngOnInit(): void {
    this.getlistClient();
  }
  async getlistClient() {
    await this.shredService.getAllfromTab("client").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listClient = msg;
        } else {
          this.listClient = [];
        }
      }, error: (err) => {

        this.listClient = [];
      }
    })
  }

  open() {
    const modalRef = this.modalService.open(AddUpdateClientComponent);
    modalRef.componentInstance.title = 'Add Client';
    modalRef.componentInstance.add = true;
  }
  openUpdate(item:any) {
    const modalRef = this.modalService.open(AddUpdateClientComponent);
    modalRef.componentInstance.title = 'Update Client';
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.item = item;
  }
  openDelete(id:any) {
    const modalRef = this.modalService.open(DeleteClientComponent);
    modalRef.componentInstance.title = 'Supprtion  Client';
    modalRef.componentInstance.id_clent_dellete = id;
  }
}
