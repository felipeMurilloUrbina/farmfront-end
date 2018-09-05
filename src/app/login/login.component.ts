import { User } from './../_modelos/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../_servicios/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(public router: Router, private service: AuthenticationService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.service.show();
    this.service.login(this.user).subscribe(dato => {
      this.service.hide();
      const helper = new JwtHelperService();
      const token = localStorage.getItem('token');
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role === 'Master') {
        this.router.navigate(['/admin/usuarios']);
      } else {
        this.router.navigate(['/admin/perfil']);
      }
    });
  }
}
