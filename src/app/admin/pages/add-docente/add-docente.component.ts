import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {AddDocentes} from "../../../Classes/add-docentes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent {

  constructor(private service:ApiServiceService,private router:Router) {
  }

  save(ape1:string,ape2:string,contra:string,correo:string,direccion:string,nombre:string,telefono:string){
    if(ape1==""||ape2==""||contra==""||correo==""||direccion==""||nombre==""||telefono==""){
      alert("LLENA TODOS LOS CAMPOS")
    }else{
      this.service.postAddAdmin(new AddDocentes(ape1,ape2,contra,correo,direccion,"2",nombre,"1",telefono))
      this.router.navigate(['/admin/docentes'])
    }
  }
  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
