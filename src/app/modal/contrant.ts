export class Contrant {

    nom:string; soc:string; cin:string; tel:string; mail:string; objet:string;
    date_travail:string; autre:string; lieu:string; date_recp:string; lieu_recp:string; prix:string;
     avance:string; reste:string; date_paiement:string;id;



    constructor(nom:string, soc:string, cin:string, tel:string, 
        mail:string, objet:string, date_travail:string, autre:string, lieu:string, 
        date_recp:string, lieu_recp:string, prix:string, avance:string, reste:string,
         date_paiement:string,id?:string)
{
this.nom=nom;
this.soc=soc;
this.cin=cin;
this.tel=tel;
this.mail=mail;
this.objet=objet;
this.date_travail=date_travail;
this.autre=autre;
this.lieu=lieu;
this.date_recp=date_recp;
this.lieu_recp=lieu_recp;
this.prix=prix;
this.avance=avance;
this.reste=reste;
this.date_paiement=date_paiement;
this.id=id;
}


    }
