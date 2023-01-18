import { Component,OnInit,OnDestroy } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit{
  idDocente:any=localStorage.getItem("idDocente")

  constructor(private service:ApiServiceService) {}

  get dataDocente():any{
    return this.service.dataDocente
  }

  ngOnInit(): void {
    this.service.getDataDocente(this.idDocente)
    console.log(this.dataDocente)
  }
}
