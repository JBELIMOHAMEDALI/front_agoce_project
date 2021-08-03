export class Client {
    id_client?: string;
    name: string;
    email: string;
    phone: string;
    logo: string;
    address: string;
    nom_soc:string;
    facebook;
    twitter;
    google_plus_link;
    linkedin;
    constructor(nom_soc:string,name: string, email: string, phone: string, logo: string, address: string, facebook?: string,
        twitter?: string, google_plus_link?: string, linkedin?: string, id_client?: string) {
        this.id_client = id_client;
        this.name = name;
        this.nom_soc = nom_soc;
        this.email = email;
        this.phone = phone;
        this.logo = logo;
        this.address = address;
        this.facebook = facebook;
        this.twitter = twitter;
        this.google_plus_link = google_plus_link;
        this.linkedin = linkedin;
    }
}
