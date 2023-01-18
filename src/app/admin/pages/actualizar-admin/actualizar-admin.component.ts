import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Calificacion} from "../../../Classes/calificacion";
import {UpdateData} from "../../../Classes/update-data";

@Component({
  selector: 'app-actualizar-admin',
  templateUrl: './actualizar-admin.component.html',
  styleUrls: ['./actualizar-admin.component.css']
})
export class ActualizarAdminComponent implements OnInit{
  idDocente: any = localStorage.getItem("idDocente")

  get dataDocente():any{
    return this.service.dataDocente
  }

  constructor(private service:ApiServiceService) {}

  ngOnInit(): void {
    this.service.getDataDocente(this.idDocente)
  }

  save(telefono:string,correo:string,direccion:string,contrasenia:string){
    if(telefono==""||correo==""||direccion==""||contrasenia==""){
      alert("LLENE TODOS LOS CAMPOS")
    }else{
      this.service.putUpdateAdmin(new UpdateData(telefono,correo,direccion,contrasenia),this.idDocente)
    }
  }
  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
