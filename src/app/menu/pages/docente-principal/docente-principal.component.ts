import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-docente-principal',
  templateUrl: './docente-principal.component.html',
  styleUrls: ['./docente-principal.component.css']
})
export class DocentePrincipalComponent implements OnInit{
  nombreAdministrativo:any=localStorage.getItem("nombreAdministrativo")

  get respuesta():any{
    return this.service.respuesta
  }
  constructor(private service:ApiServiceService) {
  }
  ngOnInit(): void {
    console.log(this.respuesta)
  }

}
