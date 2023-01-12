import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-validar-cargas',
  templateUrl: './validar-cargas.component.html',
  styleUrls: ['./validar-cargas.component.css']
})
export class ValidarCargasComponent {
  idAlumno:any=localStorage.getItem("idAlumno")
  idSemestre:any=localStorage.getItem("idSemestre")

  estado:string=""
  statusCarga:string=""

  constructor(private service: ApiServiceService,private router: Router) {}

  get carga_semestre():any{
    return this.service.carga_semestre
  }

  ngOnInit(): void {
    this.service.getCargaSemestre(this.idAlumno,this.idSemestre)
  }

  validar(){
    if(this.estado==""){
     alert("VALIDA O RECHAZA LA CARGA ACADEMICA")
    }else{
      if(this.estado=="Validar Carga"){
        this.statusCarga="1"
      }else{
        this.statusCarga="0"
      }
      console.log(this.statusCarga)
      this.service.putCarga(this.idAlumno,this.idSemestre,this.statusCarga)
      this.router.navigate(['/admin/semestres'])
    }
  }
  opciones=[
    "Validar Carga",
    "Rechazar Carga"
  ]
  back(){
    localStorage.removeItem("idSemestre")
  }
}
