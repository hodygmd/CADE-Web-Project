import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Calificacion} from "../../../Classes/calificacion";

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit{
  idDocente: any = localStorage.getItem("idDocente")
  idMateria: any = localStorage.getItem("idMateria")
  idGrupo: any = localStorage.getItem("idGrupo")

  desempenio:Array<string>=[]
  calif:Array<number>=[]
  ids:Array<number>=[]

  constructor(private service:ApiServiceService) {}
  get alumn():any{
    return this.service.alumn
  }

  ngOnInit(): void {
    this.service.alumns(this.idDocente,this.idMateria,this.idGrupo)
  }

  getPerformance(calificacion:string,i:number){
    let cal=parseFloat(calificacion)
    if(cal>=95){
      this.desempenio[i]="EXCELENTE"
    }else if(cal>=90){
      this.desempenio[i]="NOTABLE"
    }else if(cal>=80){
      this.desempenio[i]="BUENO"
    } else if(cal>=70){
      this.desempenio[i]="SUFICIENTE"
    }else{
      this.desempenio[i]="NA"
    }
    this.calif[i]=cal
    for(let j=0;j<this.alumn.length;j++){
      this.ids[j]=this.alumn[j].id
    }
    console.log(this.desempenio)
    console.log(this.calif)
    console.log(this.ids)
  }

  makePost(){
    for(let i=0;i<this.ids.length;i++){
      this.calificaciones?.push(new Calificacion(this.ids[i],this.calif[i],this.desempenio[i],"1"))
      console.log(this.ids[i])
      console.log(this.calif[i])
      console.log(this.desempenio[i])
    }
    this.service.setCalificaciones(this.calificaciones)
    console.log(this.calificaciones)
  }
  back(){
    localStorage.removeItem("idGrupo")
    localStorage.removeItem("idMateria")
  }
  calificaciones: Calificacion[]=[]
}
