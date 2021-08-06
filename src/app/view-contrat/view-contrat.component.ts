import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-contrat',
  templateUrl: './view-contrat.component.html',
  styleUrls: ['./view-contrat.component.css']
})
export class ViewContratComponent implements OnInit {
titre:string ="Facture"//Devis
  constructor() { }

  ngOnInit(): void {
  }

}
