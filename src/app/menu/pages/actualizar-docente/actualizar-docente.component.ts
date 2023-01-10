import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit{
  datos:Array<string>=[]
  get respuesta():any{
    return this.service.respuesta
  }
  constructor(private service:ApiServiceService) {}

  save(telefono:string,correo:string,direccion:string,contrasenia:string){

  }

  ngOnInit(): void {



  }
}
