import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-docente-principal',
  templateUrl: './docente-principal.component.html',
  styleUrls: ['./docente-principal.component.css']
})
export class DocentePrincipalComponent implements OnInit{
  nombre:any=localStorage.getItem("nombre")
  contra:any=localStorage.getItem("contrasenia")
  get respuesta():any{
    return this.service.respuesta
  }
  constructor(private service:ApiServiceService) {
  }
  ngOnInit(): void {
    console.log(this.respuesta)
    localStorage.removeItem("idGrupo")
    localStorage.removeItem("idMateria")
    this.service.auth(this.nombre,this.contra)
  }

}
