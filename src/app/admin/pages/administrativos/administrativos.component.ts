import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.css']
})
export class AdministrativosComponent implements OnInit{

  constructor(private service:ApiServiceService) {}

  get admin():any{
    return this.service.admin
  }

  ngOnInit(): void {
    this.service.getAdmin()
  }

  update(idDocente:string){
    localStorage.setItem("idDocenteAddSubject",idDocente)
  }

}
