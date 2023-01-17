import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {UpdateData} from "../../../Classes/update-data";

@Component({
  selector: 'app-actualizar-docentes',
  templateUrl: './actualizar-docentes.component.html',
  styleUrls: ['./actualizar-docentes.component.css']
})
export class ActualizarDocentesComponent {
  idDocente: any = localStorage.getItem("idDocenteAddSubject")

  datos:Array<string>=[]

  get updated():any{
    return this.service.updated
  }

  get dataDocente():any{
    return this.service.dataDocente
  }

  constructor(private service:ApiServiceService) {}

  ngOnInit(): void {
    this.service.getDataDocente(this.idDocente)
    this.datos.push(this.dataDocente.telefonoAdministrativo,this.dataDocente.correoAdministrativo,this.dataDocente.direccionAdministrativo,this.dataDocente.contraseniaAdministrativo)
    console.log(this.datos)
  }

  save(telefono:string,correo:string,direccion:string,contrasenia:string){
    if(telefono==""||correo==""||direccion==""||contrasenia==""){
      alert("LLENE TODOS LOS CAMPOS")
    }else{
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
