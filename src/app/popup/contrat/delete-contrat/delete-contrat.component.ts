import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-contrat',
  templateUrl: './delete-contrat.component.html',
  styleUrls: ['./delete-contrat.component.css']
})
export class DeleteContratComponent implements OnInit {

  @Input() title:any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
