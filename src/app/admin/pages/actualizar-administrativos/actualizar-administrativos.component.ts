import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {UpdateData} from "../../../Classes/update-data";
import {UpdateAdmins} from "../../../Classes/update-admins";

@Component({
  selector: 'app-actualizar-administrativos',
  templateUrl: './actualizar-administrativos.component.html',
  styleUrls: ['./actualizar-administrativos.component.css']
})
export class ActualizarAdministrativosComponent {
  idDocente: any = localStorage.getItem("idDocenteAddSubject")

  get dataDocente():any{
    return this.service.dataDocente
  }

  constructor(private service:ApiServiceService) {}

  ngOnInit(): void {
    this.service.getDataDocente(this.idDocente)
  }

  save(ape1:string,ape2:string,contra:string,correo:string,direccion:string,nombre:string,telefono:string){
    if(ape1==""||ape2==""||contra==""||correo==""||direccion==""||nombre==""||telefono==""){
      alert("LLENE TODOS LOS CAMPOS")
    }else{
      this.service.putUpdateAdmin(new UpdateAdmins(ape1,ape2,contra,correo,direccion,nombre,telefono),this.idDocente)
    }
  }
  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
