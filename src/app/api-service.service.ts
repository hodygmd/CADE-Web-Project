import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PersonInterface} from './person-interface';
import * as url from "url";
import {SubjectInterface} from "./subject-interface";
import {AlumnInterface} from "./alum-interface";
import {Calificacion} from "./calificacion";
import * as http from "http";
import {UpdateData} from "./update-data";
import {CareerInterface} from "./career-interface";
import {GroupInterface} from "./group-interface";
import {AlumnoCargaInterface} from "./alumno-carga-interface";
import {CargaSemestreInterface} from "./carga-semestre-interface";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public respuesta?: PersonInterface
  public flag: string = "0"
  public subject?: SubjectInterface[]
  public alumn?: AlumnInterface
  public carrera?:CareerInterface
  public grupo?:GroupInterface[]
  public alumno?:AlumnoCargaInterface[]
  public updated?: UpdateData
  public carga_semestre?: CargaSemestreInterface[]
  public semestre?: Array<string>

  urlBase: string = "http://ec2-3-139-56-194.us-east-2.compute.amazonaws.com:8081"

  constructor(private http: HttpClient) {
  }

  auth(nombre: string, contra: string) {
    this.http.get<PersonInterface>(`${this.urlBase}/administrativo/authv2?nombre=${nombre}&contra=${contra}`)
      .subscribe((resp: PersonInterface) => {
        this.respuesta = resp
        this.flag = "1"
      }, error => {
        console.log("no se pudo master")
        this.flag = "0"
      })
  }

  subjects(id_admin: string) {
    this.http.get<SubjectInterface[]>(`${this.urlBase}/administrativo/materias/id/${id_admin}`)
      .subscribe((resp: SubjectInterface[]) => {
        this.subject = resp
        console.log(this.subject[0].claveMateriaFk.nombreMateria)
      }, error => {
        console.log("no se pudo master")
      })
  }

  alumns(id_admin: string, materia: string, grupo: string) {
    this.http.get<AlumnInterface>(`${this.urlBase}/administrativo/alumnos/${id_admin}/${materia}/${grupo}/`)
      .subscribe((resp: AlumnInterface) => {
        this.alumn = resp
        console.log(this.alumn)
      }, error => {
        console.log("no se pudo master")
      })
  }

  setCalificaciones(califcaciones: Calificacion[]) {
    this.http.post(`${this.urlBase}/administrativo/registro-calificaciones`, califcaciones)
      .subscribe((resp: any) => {
        console.log(resp)
      }, error => {
        console.log("no se pudo master")
      })
  }

  putUpdateAdmin(datosAct: UpdateData, id: string) {
    this.http.put(`${this.urlBase}/administrativo/actualizar?id=${id}`, datosAct)
      .subscribe((resp: any) => {
        console.log(resp)
        this.updated = resp
        alert("DATOS ACTUALIZADOS CORRECTAMENTE")
      }, error => {
        console.log("no se pudo master")
        alert("ERROR AL ACTUALIZAR DATOS")
      })
  }
  getCareer(){
    this.http.get<CareerInterface>(`${this.urlBase}/carreras`)
      .subscribe((resp:CareerInterface)=>{
        console.log(resp)
        this.carrera=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getGroups(carrera:string){
    this.http.get<GroupInterface[]>(`${this.urlBase}/horario/grupos/carrera/${carrera}`)
      .subscribe((resp:GroupInterface[])=>{
        console.log(resp)
        this.grupo=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getAlumns(grupo:string){
    this.http.get<AlumnoCargaInterface[]>(`${this.urlBase}/horario/alumnos/grupo/${grupo}/`)
      .subscribe((resp:AlumnoCargaInterface[])=>{
        console.log(resp)
        this.alumno=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getSemestre(id:string){
    this.http.get<Array<string>>(`${this.urlBase}/carga/semestres/id/${id}`)
      .subscribe((resp:Array<string>)=>{
        console.log(resp)
        this.semestre=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getCargaSemestre(id:string,semestre:string){
    this.http.get<CargaSemestreInterface[]>(`${this.urlBase}/carga/semestre/id/${id}/semestre/${semestre}`)
      .subscribe((resp:CargaSemestreInterface[])=>{
        console.log(resp)
        this.carga_semestre=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  putCarga(id:string,semestre:string,status:string){
    this.http.put(`${this.urlBase}/carga/statusc/id/${id}/semestre/${semestre}/status/${status}`,status)
      .subscribe((resp:any)=>{
        console.log(resp)
        this.carga_semestre=resp
        alert("CARGA VALIDADA CORRECTAMENTE")
      },error => {
        console.log("no se pudo master")
        alert("ERROR AL VALIDAR CARGA")
      })
  }
}
