import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ApiServiceService } from '../../../api-service.service';
import { PersonInterface } from '../../../person-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:ApiServiceService,private router: Router) {
  }

  get respuesta():any{
    return this.service.respuesta
  }
  sesion(nombre: string, contra: string) {
    this.service.auth(nombre, contra)
    this.router.navigate(['/menu/sidebar'])
    //console.log(this.respuesta)
  }

}
