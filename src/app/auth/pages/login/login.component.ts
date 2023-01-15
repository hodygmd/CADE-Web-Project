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
  }
}
