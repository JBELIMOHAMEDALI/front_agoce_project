import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-devis',
  templateUrl: './delete-devis.component.html',
  styleUrls: ['./delete-devis.component.css']
})
export class DeleteDevisComponent implements OnInit {

  @Input() title:any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
