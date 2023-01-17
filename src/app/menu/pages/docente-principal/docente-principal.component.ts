import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-docente-principal',
  templateUrl: './docente-principal.component.html',
  styleUrls: ['./docente-principal.component.css']
})
export class DocentePrincipalComponent implements OnInit{
  idDocente:any=localStorage.getItem("idDocente")

  constructor(private service:ApiServiceService) {}

  get dataDocente():any{
    return this.service.dataDocente
  }

  ngOnInit(): void {
    localStorage.removeItem("idGrupo")
    localStorage.removeItem("idMateria")
    this.service.getDataDocente(this.idDocente)
  }

}
