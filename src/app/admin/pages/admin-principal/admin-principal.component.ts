import { Component,OnInit,OnDestroy } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit{
  get respuesta():any{
    return this.service.respuesta
  }
  constructor(private service:ApiServiceService) {}

  ngOnInit(): void {
    this.service.auth(this.respuesta.nombreAdministrativo,this.respuesta.contraseniaAdministrativo)
  }
}
