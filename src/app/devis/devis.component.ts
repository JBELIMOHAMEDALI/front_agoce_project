import { Component, OnInit } from '@angular/core';
import { DevisService } from '../service/devis.service';
import { SheredService } from '../service/shered.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  listDevis: any[] = [];

  constructor(private deviService:DevisService,private shredService: SheredService,) { }

  ngOnInit(): void {
    this.getlistDevis();
  }

  async getlistDevis() {
    await this.shredService.getAllfromTab("contrats").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listDevis = msg;
          console.log(msg);
          
        } else {
          this.listDevis = [];
        }
      }, error: (err) => {

        this.listDevis = [];
      }
    })
  }
}
