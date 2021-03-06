import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratsService } from '../service/contrats.service';
import { SheredService } from '../service/shered.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
active_id:any="-1";
object:any;
listContra:any[]=[];
  constructor(private route: ActivatedRoute,
    private contactService:ContratsService
              ,private shredService: SheredService) {
    const id:any = this.route.snapshot.paramMap.get('id_client')?.toString();
    this.active_id=id.toString();
  }
  ngOnInit(): void {
    this.getInfoClient()
    this.getListContra();
  }
async getInfoClient()
{
await this.shredService.getOneFromTab("client",this.active_id,"id_client").subscribe(
  {next:(data)=>{
    const donne: any = data;
    const msg = donne.msg;
    const error = donne.errorer;
    if (!error) {
      this.object = msg[0];
      console.log(this.object);
    } else {
      this.object = [];
    }
  },
  error:(err)=>{
    this.object = [];
  }})
}

async getListContra()
{
await this.contactService.getAllContrantByClient(this.active_id).subscribe(
  {next:(data)=>{
    const donne: any = data;
    const msg = donne.msg;
    const error = donne.errorer;
    if (!error) {
      this.listContra = msg;
    } else {
      this.object = [];
    }
  },
  error:(err)=>{
    this.listContra = [];
  }})
}

opentab(id:string)
{
  if(id=='1'){ window.open(this.object.facebook, '_blank');}
 else if(id=='2'){ window.open(this.object.twitter, '_blank');}
 else if(id=='3'){ window.open(this.object.google_plus_link, '_blank');}
 else{ window.open(this.object.linkedin, '_blank');}
}
}
