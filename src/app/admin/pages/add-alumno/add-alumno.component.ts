import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {AddDocentes} from "../../../Classes/add-docentes";
import {Router} from "@angular/router";
import {AddAlumnos} from "../../../Classes/add-alumnos";

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit{
  genero:string=""
  carreraSelect:string="--SELECCIONA--"
  fecha:any=""

  constructor(private service:ApiServiceService,private router:Router) {
  }

  get carrera():any{
    return this.service.carrera
  }

  ngOnInit(): void {
    this.service.getCareer()
  }

  save(ape1:string,ape2:string,contra:string,correo:string,direccion:string,nombre:string,telefono:string){
    if(ape1==""||ape2==""||contra==""||correo==""||direccion==""||nombre==""||telefono==""||this.genero==""||this.fecha==""||this.carreraSelect=="--SELECCIONA--"){
      alert("LLENA TODOS LOS CAMPOS")
    }else{
      var gen
      if(this.genero=="Mujer"){
        gen="M"
      }else{
        gen="H"
      }
      this.service.postAddAlumn(new AddAlumnos(ape1,ape2,this.carreraSelect,contra,correo,direccion,this.fecha,gen,"",nombre,telefono))
      this.router.navigate(['/admin/usuarios'])
      console.log(this.carreraSelect)
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
