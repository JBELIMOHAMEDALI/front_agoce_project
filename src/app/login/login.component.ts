import { Component, OnInit } from '@angular/core';
import { EmailValidator, Form } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
  }
 async onSignin(f:any)
  { //{EmailValidator,pass}
  //   const { email, pass } = f.value;
  //  await this.loginservice.getlogin(email, pass).subscribe((data) => {
  //     const donne: any = data;
  //     const err = donne.error;
  //     const mayUser = donne.msg;
  //     if (!err) {
  //         const nom_prenom = (donne.msg.nom + " " + donne.msg.prenom).toString();
  //         localStorage.setItem('id_user', JSON.stringify(donne.msg.id_user));
  //         localStorage.setItem('nomuser', nom_prenom);
  //         this.route.navigate(['/dashboard']);
  //     } else {
  //       swal('warning', 'Vérifier votre Émail et/ou votre mot de passe', 'warning')
  //     }
  //   });
  this.route.navigate(['/dashboard']);

  }
}
