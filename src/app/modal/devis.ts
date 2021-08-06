export class Devis {

    info:string;
    qte:string;
    puht:string;
    tva:string;
    tht:string;
    id_devi_g:string;
    date_devis;
    id_devis;
    constructor(  info:string, qte:string, puht:string, tva:string, tht:string,  id_devi_g:string,id_devis?:string,date_devis?:string,
        )
    {
this.info=info;
this.qte=qte;
this.puht=puht;
this.tva=tva;
this.tht=tht;
this.date_devis=date_devis;
this.id_devi_g=id_devi_g;
this.id_devis=id_devis;

    }
}
