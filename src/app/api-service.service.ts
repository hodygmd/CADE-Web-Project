import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonInterface } from './person-interface';
import * as url from "url";
import {SubjectInterface} from "./subject-interface";
import {AlumnInterface} from "./alum-interface";
import {Calificacion} from "./calificacion";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public respuesta?:PersonInterface
  flag:boolean=false
  public subject?:SubjectInterface[]
  public alumn?:AlumnInterface
  urlBase:string="http://ec2-3-139-56-194.us-east-2.compute.amazonaws.com:8081"

  constructor(private http: HttpClient) {}

  auth(nombre: string, contra: string) {
    this.http.get<PersonInterface>(`${this.urlBase}/administrativo/authv2?nombre=${nombre}&contra=${contra}`)
    .subscribe((resp:PersonInterface) => {
      this.respuesta=resp
      this.flag=true
    }, error => {
      console.log("no se pudo master")
    })
  }
  subjects(id_admin:string){
    this.http.get<SubjectInterface[]>(`${this.urlBase}/administrativo/materias/id/${id_admin}`)
      .subscribe((resp:SubjectInterface[]) => {
        this.subject=resp
        console.log(this.subject[0].claveMateriaFk.nombreMateria)
      }, error => {
        console.log("no se pudo master")
      })
  }
  alumns(id_admin:string,materia:string,grupo:string){
    this.http.get<AlumnInterface>(`${this.urlBase}/administrativo/alumnos/${id_admin}/${materia}/${grupo}/`)
      .subscribe((resp:AlumnInterface) => {
        this.alumn=resp
        console.log(this.alumn)
      }, error => {
        console.log("no se pudo master")
      })
  }
  setCalificaciones(califcaciones:Calificacion[]){
    this.http.post(`${this.urlBase}/administrativo/registro-calificaciones`,califcaciones)
      .subscribe((resp:any)=>{
        console.log(resp)
      },error=>{
        console.log("no se pudo master")
    })
  }
  putUpdateAdmin(){

  }
}
