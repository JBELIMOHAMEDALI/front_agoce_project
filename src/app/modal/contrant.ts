export class Contrant {
  autre: string;
  lieu: string;
  date_recp: string;
  lieu_recp: string;
  avance: string;
  date_paiement: any;
  id_devi:any;
  id_contrat:any;
  date_contrats;




  constructor(autre: string, lieu: string, date_recp: string, lieu_recp: string,  avance: string, date_paiement?: string, id_devi?: string, id_contrat?: string, date_contrats?: string,) {
    this.id_devi = id_devi;
    this.autre = autre;
    this.lieu = lieu;
    this.date_recp = date_recp;
    this.lieu_recp = lieu_recp;
    this.avance = avance;
    this.date_paiement = date_paiement;
    this.id_contrat = id_contrat;
    this.date_contrats = date_contrats;
  }


}
