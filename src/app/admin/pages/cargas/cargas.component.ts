import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent {
  idGrupo:any=localStorage.getItem("idGrupo")

  constructor(private service: ApiServiceService,private router: Router) {}

  get alumno():any{
    return this.service.alumno
  }

  ngOnInit(): void {
    this.service.getAlumns(this.idGrupo)
  }

  goSemester(idAlumno:string,nombreAlumno:string){
    localStorage.setItem("idAlumno",idAlumno)
    localStorage.setItem("nombreAlumno",nombreAlumno)
    this.router.navigate(['/admin/semestres'])
  }
}
