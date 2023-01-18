import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";
import {AddDocentes} from "../../../Classes/add-docentes";

@Component({
  selector: 'app-add-administrativo',
  templateUrl: './add-administrativo.component.html',
  styleUrls: ['./add-administrativo.component.css']
})
export class AddAdministrativoComponent {
  constructor(private service:ApiServiceService,private router:Router) {
  }

  save(ape1:string,ape2:string,contra:string,correo:string,direccion:string,nombre:string,telefono:string){
    if(ape1==""||ape2==""||contra==""||correo==""||direccion==""||nombre==""||telefono==""){
      alert("LLENA TODOS LOS CAMPOS")
    }else{
      this.service.postAddAdmin(new AddDocentes(ape1,ape2,contra,correo,direccion,"3",nombre,"1",telefono))
      this.router.navigate(['/admin/administrativos'])
    }
  }

  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
