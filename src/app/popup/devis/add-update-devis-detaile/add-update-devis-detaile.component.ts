import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-update-devis-detaile',
  templateUrl: './add-update-devis-detaile.component.html',
  styleUrls: ['./add-update-devis-detaile.component.css']
})
export class AddUpdateDevisDetaileComponent implements OnInit {

  @Input() title:any;
  @Input() id:any;
  @Input() add:any;
  model: any = {};
  @Input() item:any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }
  MAngDevi(f:any)
  {
alert(JSON.stringify(f.value))
  }
}
