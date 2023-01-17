import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "../../../api-service.service";
import {LoginComponent} from "../../../auth/pages/login/login.component";
import {SubjectInterface} from "../../../Interfaces/subject-interface";

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  idDocente: any = localStorage.getItem("idDocente")

  constructor(private service: ApiServiceService,private router: Router) {}

  get subjects(): any {
    return this.service.subject
  }

  ngOnInit(): void {
    localStorage.removeItem("idAlumno")
    localStorage.removeItem("idMateria")
    this.service.subjects(this.idDocente)
  }

  getSubject(idMateria: string,idGrupo:string){
    console.log(idMateria)
    localStorage.setItem("idMateria",idMateria)
    localStorage.setItem("idGrupo",idGrupo)
    this.router.navigate(['/menu/calificaciones'])
  }
}
