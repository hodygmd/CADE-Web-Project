import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-actualizar-admin',
  templateUrl: './actualizar-admin.component.html',
  styleUrls: ['./actualizar-admin.component.css']
})
export class ActualizarAdminComponent implements OnInit{
  datos:Array<string>=[]
  get respuesta():any{
    return this.service.respuesta
  }

  constructor(private service:ApiServiceService) {}

  save(telefono:string,correo:string,direccion:string,contrasenia:string){

  }

  ngOnInit(): void {
    this.datos.push(this.respuesta.contraseniaAdministrativo,this.respuesta.correoAdministrativo,this.respuesta.direccionAdministrativo,this.respuesta.telefonoAdministrativo)
    console.log(this.datos)
  }
}
