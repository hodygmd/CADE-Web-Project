import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Calificacion} from "../../../Classes/calificacion";
import {AddSubjects} from "../../../Classes/add-subjects";
import {Router} from "@angular/router";

@Component({
  selector: 'app-asignar-materias',
  templateUrl: './asignar-materias.component.html',
  styleUrls: ['./asignar-materias.component.css']
})
export class AsignarMateriasComponent implements OnInit{
  idCarrera: any = localStorage.getItem("ididCarrera")
  idGrupo: any = localStorage.getItem("idGrupo")
  idDocente: any = localStorage.getItem("idDocenteAddSubject")
  ids:Array<string>=[]
  periodo:string=""

  constructor(private service:ApiServiceService,private router:Router) {
  }

  get allSubject():any{
    return this.service.allSubject
  }

  ngOnInit(): void {
    this.service.getAllSubjects()
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

  saveCareers() {
    console.log(this.ids)
    var today = new Date();
    var year = today.getFullYear();
    var period
    if(this.periodo==""||this.ids.length==0){
      alert("ELIGE LAS MATERIAS Y EL PERIODO")
    }else{
      if(this.periodo=="Periodo 1"){
        period=`${year}-1`
      }else{
        period=`${year}-2`
      }
      console.log(period)
      for(let i=0;i<this.ids.length;i++){
        this.subjects?.push(new AddSubjects(this.idCarrera,this.ids[i],this.idGrupo,period))
      }
      console.log(this.subjects)
      this.service.postAddTecaherSubject(this.idDocente,this.subjects)
      this.router.navigate(['/admin/grupos-add-materias'])
      /*this.router.navigate(['/admin/semestres'])*/
    }
  }
  opciones=[
    "Periodo 1",
    "Periodo 2"
  ]
  subjects: AddSubjects[]=[]
}
