import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from '../../../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  get respuesta(): any {
    return this.service.respuesta
  }

  constructor(private service: ApiServiceService, private router: Router) {
  }

  ngOnInit(): void {
    localStorage.clear()

  }

  sesion(nombre: string, contra: string) {
    if (nombre == "" || contra == "") {
      alert("INGRESAR")
    }else {
      this.service.auth(nombre, contra)
    }
    /*localStorage.setItem("idDocente", this.respuesta.id)
    localStorage.setItem("nombre",this.respuesta.nombreAdministrativo)
    localStorage.setItem("contrasenia",this.respuesta.contraseniaAdministrativo)*/
    /*if(nombre==""||contra==""){

      if(nombre==""){
        alert("INGRESA nom")
      }else if(contra==""){
        alert("INGRESA contra")
      }
    }else{
      this.service.auth(nombre,contra)
      localStorage.setItem("idDocente", this.respuesta.id)
      localStorage.setItem("nombre",this.respuesta.nombreAdministrativo)
      localStorage.setItem("contrasenia",this.respuesta.contraseniaAdministrativo)
      this.nav(this.respuesta.idRolFk.id)
      if (this.respuesta.idRolFk.id == "2") {
        this.router.navigate(['/menu/sidebar'])
      } else if (this.respuesta.idRolFk.id == "3") {
        this.router.navigate(['/admin/sidebar'])
      }
    }*/
  }
}
