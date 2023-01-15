import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-docente-principal',
  templateUrl: './docente-principal.component.html',
  styleUrls: ['./docente-principal.component.css']
})
export class DocentePrincipalComponent implements OnInit{
  get respuesta():any{
    return this.service.respuesta
  }
  constructor(private service:ApiServiceService) {
  }
  ngOnInit(): void {
    localStorage.removeItem("idGrupo")
    localStorage.removeItem("idMateria")
    this.service.auth(this.respuesta.nombreAdministrativo,this.respuesta.contraseniaAdministrativo)
  }

}
