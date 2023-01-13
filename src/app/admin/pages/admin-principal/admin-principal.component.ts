import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit{
  nombre:any=localStorage.getItem("nombre")
  contra:any=localStorage.getItem("contrasenia")
  get respuesta():any{
    return this.service.respuesta
  }
  constructor(private service:ApiServiceService) {}

  ngOnInit(): void {
    this.service.auth(this.nombre,this.contra)
  }
}
