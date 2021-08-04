import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-update-contrat',
  templateUrl: './add-update-contrat.component.html',
  styleUrls: ['./add-update-contrat.component.css']
})
export class AddUpdateContratComponent implements OnInit {

  @Input() title:any;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
  }

}
