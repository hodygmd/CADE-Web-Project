import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Calificacion} from "../../../Classes/calificacion";
import {ClavesCarrera} from "../../../Classes/claves-carrera";
import {Router} from "@angular/router";

@Component({
  selector: 'app-asignar-carreras',
  templateUrl: './asignar-carreras.component.html',
  styleUrls: ['./asignar-carreras.component.css']
})
export class AsignarCarrerasComponent implements OnInit{
  idDocente:any=localStorage.getItem("idDocenteAddCareer")
  nomDocente:any=localStorage.getItem("nomDocente")
  ids:Array<string>=[]

  constructor(private service:ApiServiceService,private router:Router) {}

  get carrera():any{
    return this.service.carrera
  }

  ngOnInit(): void {
    this.service.getCareer()
  }

  saveCareers() {
    console.log(this.ids)
    for(let i=0;i<this.ids.length;i++){
      this.claves?.push(new ClavesCarrera(this.ids[i]))
    }
    this.service.postAddTeacherCareer(this.claves,this.idDocente)
    this.router.navigate(['/admin/docentes'])
  }

  onCheckboxChange(event: any) {
    if(event.target.checked){
      this.ids.push(event.target.value)
    }else {
      let index=this.ids.indexOf(event.target.value)
      if(index!==-1){
        this.ids.splice(index,1)
      }
    }
    /*this.ids[0]=event.target.value*/
  }
  claves: ClavesCarrera[]=[]
  back(){
    localStorage.removeItem("idDocenteAddCareer")
    localStorage.removeItem("nomDocente")
  }
}
