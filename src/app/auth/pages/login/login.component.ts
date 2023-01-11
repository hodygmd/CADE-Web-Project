import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from '../../../api-service.service';
import {PersonInterface} from '../../../person-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  get respuesta(): any {
    return this.service.respuesta
  }

  get flag(): string {
    return this.service.flag
  }

  constructor(private service: ApiServiceService, private router: Router) {}

  ngOnInit():void {

  }


  sesion(nombre: string, contra: string) {
    this.service.auth(nombre, contra)
    if(this.flag=="1"){
      localStorage.setItem("idDocente", this.respuesta.id)
      if (this.respuesta.idRolFk.id == "2") {
        this.router.navigate(['/menu/sidebar'])
      } else if (this.respuesta.idRolFk.id == "3") {
        this.router.navigate(['/admin/sidebar'])
      }
    }
  }
}
