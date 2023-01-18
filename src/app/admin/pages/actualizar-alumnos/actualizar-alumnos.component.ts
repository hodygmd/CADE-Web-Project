import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {AddAlumnos} from "../../../Classes/add-alumnos";
import {UpdateAlumn} from "../../../Classes/update-alumn";

@Component({
  selector: 'app-actualizar-alumnos',
  templateUrl: './actualizar-alumnos.component.html',
  styleUrls: ['./actualizar-alumnos.component.css']
})
export class ActualizarAlumnosComponent implements OnInit{
  idAlumno:any=localStorage.getItem("idAlumno")

  genero:string=""
  fecha:any=""

  constructor(private service:ApiServiceService) {
  }

  get dataAlumno():any{
    return this.service.dataAlumno
  }

  ngOnInit(): void {
    this.service.getDataAlumn(this.idAlumno)
    this.service.getCareer()
  }

  save(ape1:string,ape2:string,contra:string,correo:string,direccion:string,nombre:string,telefono:string){

    if(ape1==""||ape2==""||contra==""||correo==""||direccion==""||nombre==""||telefono==""||this.genero==""||this.fecha==""){
      alert("LLENA TODOS LOS CAMPOS")
    }else{
      var gen
      if(this.genero=="Mujer"){
        gen="M"
      }else{
        gen="H"
      }
      this.service.putUpdateAlumn(new UpdateAlumn(ape1,ape2,contra,correo,direccion,this.fecha,gen,nombre,telefono),this.idAlumno)
      console.log(this.fecha)
      console.log(this.genero)
    }
  }

  opciones=[
    "Mujer",
    "Hombre"
  ]

  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
