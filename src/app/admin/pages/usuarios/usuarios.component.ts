import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  constructor(private service:ApiServiceService) {
  }

  get allAlumns():any{
    return this.service.allAlumns
  }

  ngOnInit(): void {
    this.service.getAllAlumns()
  }

  update(idAlumno:string){
    localStorage.setItem("idAlumno",idAlumno)
  }
  delete(idAlumno:string){
    this.service.deleteAlumn(idAlumno)
  }
}
