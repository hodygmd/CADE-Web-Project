import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-semestres',
  templateUrl: './semestres.component.html',
  styleUrls: ['./semestres.component.css']
})
export class SemestresComponent {
  idAlumno:any=localStorage.getItem("idAlumno")
  nombreAlumno:any=localStorage.getItem("nombreAlumno")

  constructor(private service: ApiServiceService,private router: Router) {}

  get semestre():any{
    return this.service.semestre
  }

  ngOnInit(): void {
    this.service.getSemestre(this.idAlumno)
  }

  goCarga(semestre:string){
    localStorage.setItem("idSemestre",semestre)
    this.router.navigate(['/admin/validar-cargas'])
  }
}
