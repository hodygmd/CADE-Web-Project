import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {UpdateData} from "../../../Classes/update-data";

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit{
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
    }else {
      this.service.putUpdateAdmin(new UpdateData(telefono,correo,direccion,contrasenia),this.idDocente)
    }
  }

  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
