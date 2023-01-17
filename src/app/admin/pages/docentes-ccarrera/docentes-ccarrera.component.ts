import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-docentes-ccarrera',
  templateUrl: './docentes-ccarrera.component.html',
  styleUrls: ['./docentes-ccarrera.component.css']
})
export class DocentesCCarreraComponent implements OnInit{
  idCarrera:any=localStorage.getItem("idCarrera")

  constructor(private service:ApiServiceService) {
  }

  get teacherCareer():any{
    return this.service.teacherCareer
  }

  ngOnInit(): void {
    this.service.getTecaherCareer(this.idCarrera)
  }

  docente(idDocente:string){
    localStorage.setItem("idDocenteAddSubject",idDocente)
  }

  update(idDocente:string){
    localStorage.setItem("idDocenteAddSubject",idDocente)
  }

  back(){
    localStorage.removeItem("idCarrera")
    localStorage.removeItem("ididCarrera")
  }

}
