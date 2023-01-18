import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-all-docentes',
  templateUrl: './all-docentes.component.html',
  styleUrls: ['./all-docentes.component.css']
})
export class AllDocentesComponent implements OnInit{

  constructor(private service:ApiServiceService) {
  }

  get docente():any{
    return this.service.docente
  }

  ngOnInit(): void {
    this.service.getDocentes()
  }

  update(idDocente:string){
    localStorage.setItem("idDocenteAddSubject",idDocente)
  }

}
