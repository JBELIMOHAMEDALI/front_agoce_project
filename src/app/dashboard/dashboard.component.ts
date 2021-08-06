import { Component, OnInit } from '@angular/core';
import { CharetService } from '../service/charet.service';
import { SheredService } from '../service/shered.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nbr_client="0";
nbr_contra="0";
nbr_devis="0";
  constructor(private charetService:CharetService) { }

  ngOnInit(): void {
    this.getCountClient();this.getCountContra();this.getCountDevis();
  }

async getCountClient()
{
  this.charetService.getNbrClient().subscribe({next:(data)=>{
    const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.nbr_client=(msg[0].nbr_cl);

        } else {
        }

  },error:(err)=>{

  }})

}

async getCountDevis()
{
  this.charetService.getNbrDevis().subscribe({next:(data)=>{
    const donne: any = data;
    const msg = donne.msg;
    const error = donne.errorer;
    if (!error) {
      this.nbr_devis=(msg[0].nbr_dev);

    } else {
    }

  },error:(err)=>{

  }})
}

async getCountContra()
{

  this.charetService.getNbrContra().subscribe({next:(data)=>{
    const donne: any = data;
    const msg = donne.msg;
    const error = donne.errorer;
    if (!error) {
      this.nbr_contra=(msg[0].nbr_cont);

    } else {
    }

  },error:(err)=>{

  }})
}



}
