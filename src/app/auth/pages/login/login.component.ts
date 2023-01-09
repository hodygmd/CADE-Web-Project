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
  get respuesta():any{
    return this.service.respuesta
  }
  get flag():boolean{
    return this.service.flag
  }
  constructor(private service:ApiServiceService,private router: Router) {
  }
  sesion(nombre: string, contra: string) {
    this.service.auth(nombre, contra)
    if(this.flag){
      console.log(this.respuesta)
      localStorage.setItem("idDocente",this.respuesta.id)
      localStorage.setItem("nombreAdministrativo",this.respuesta.nombreAdministrativo)
      this.router.navigate(['/menu/sidebar'])
    }
  }
}
