import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {UpdateData} from "../../../update-data";

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit{
  idDocente: any = localStorage.getItem("idDocente")

  datos:Array<string>=[]

  get updated():any{
    return this.service.updated
  }

  get respuesta():any{
    return this.service.respuesta
  }

  constructor(private service:ApiServiceService) {}

  ngOnInit(): void {
    this.datos.push(this.respuesta.telefonoAdministrativo,this.respuesta.correoAdministrativo,this.respuesta.direccionAdministrativo,this.respuesta.contraseniaAdministrativo)
    console.log(this.datos)
  }

  save(telefono:string,correo:string,direccion:string,contrasenia:string){
    if(telefono==""||correo==""||direccion==""||contrasenia==""){
      alert("LLENE TODOS LOS CAMPOS")
    }else {
      this.service.putUpdateAdmin(new UpdateData(telefono,correo,direccion,contrasenia),this.idDocente)
      this.update()
    }
  }
  update(){
    this.datos[0]=this.updated.telefonoAdministrativo
    this.datos[1]=this.updated.correoAdministrativo
    this.datos[2]=this.updated.direccionAdministrativo
    this.datos[3]=this.updated.contraseniaAdministrativo
  }
}
