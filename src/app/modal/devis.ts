export class Devis {
    service:string;
    info:string;
    qte:string;
    puht:string;
    tva:string;
    tht:string;
    id_client:string;
    date_devis;
    id;
    constructor( service:string, info:string, qte:string, puht:string, tva:string, tht:string,  id_client:string,id?:string,date_devis?:string,
        )
    {
this.service=service;
this.info=info;
this.qte=qte;
this.puht=puht;
this.tva=tva;
this.tht=tht;
this.date_devis=date_devis;
this.id_client=id_client;
this.id=id;

    }
}
