import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PersonInterface} from './Interfaces/person-interface';
import * as url from "url";
import {SubjectInterface} from "./Interfaces/subject-interface";
import {AlumnInterface} from "./Interfaces/alum-interface";
import {Calificacion} from "./calificacion";
import * as http from "http";
import {UpdateData} from "./Classes/update-data";
import {CareerInterface} from "./Interfaces/career-interface";
import {GroupInterface} from "./Interfaces/group-interface";
import {AlumnoCargaInterface} from "./Interfaces/alumno-carga-interface";
import {CargaSemestreInterface} from "./Interfaces/carga-semestre-interface";
import {Router} from "@angular/router";
import {ClavesCarrera} from "./claves-carrera";
import {AllSubjects} from "./all-subjects";
import {AddSubjects} from "./add-subjects";
import {GruposMateria} from "./grupos-materia";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public respuesta?: PersonInterface
  public subject?: SubjectInterface[]
  public alumn?: AlumnInterface
  public carrera?:CareerInterface
  public grupo?:GroupInterface[]
  public alumno?:AlumnoCargaInterface[]
  public updated?: UpdateData
  public carga_semestre?: CargaSemestreInterface[]
  public semestre?: Array<string>
  public emptyTeacher?: PersonInterface
  public teacherCareer?: PersonInterface
  public subjectCareer?: SubjectInterface[]
  public allSubject?: AllSubjects[]
  public gruposMateria?:GruposMateria[]
  public dataDocente?: PersonInterface

  urlBase: string = "http://ec2-3-139-56-194.us-east-2.compute.amazonaws.com:8081"

  constructor(private http: HttpClient,private router:Router) {
  }

  auth(nombre: string, contra: string) {
    this.http.get<PersonInterface>(`${this.urlBase}/administrativo/authv2?nombre=${nombre}&contra=${contra}`)
      .subscribe((resp: PersonInterface) => {
        this.respuesta = resp
        console.log(this.respuesta)
        if (this.respuesta.idRolFk.id == 2) {
          this.router.navigate(['/menu/sidebar'])
        } else if (this.respuesta.idRolFk.id == 3) {
          this.router.navigate(['/admin/sidebar'])
        }
        localStorage.setItem("idDocente", this.respuesta.id.toString())
      }, error => {
        console.log("no se pudo master")
        alert("USUARIO O CONTRASEÑA ERRONEOS")
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

  setCalificaciones(calificaciones: Calificacion[]) {
    this.http.post(`${this.urlBase}/administrativo/registro-calificaciones`, calificaciones)
      .subscribe((resp: any) => {
        console.log(resp)
        alert("CALIFICACIONES ASIGNADAS")
      }, error => {
        console.log("no se pudo master")
        alert("ERROR AL ASIGNAR CALIFICACIONES")
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
  postAdmin(){
    this.http.post(`${this.urlBase}/administrativo/registro`,'')
      .subscribe((resp:any)=>{
        console.log(resp)
        this.carga_semestre=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getEmptyTeacher(){
    this.http.get<PersonInterface>(`${this.urlBase}/administrativo/docentes-vacios`)
      .subscribe((resp:PersonInterface)=>{
        console.log(resp)
        this.emptyTeacher=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getTecaherCareer(carrera:string){
    this.http.get<PersonInterface>(`${this.urlBase}/administrativo/docente_carrera/${carrera}`)
      .subscribe((resp:PersonInterface)=>{
        console.log(resp)
        this.teacherCareer=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  postAddTeacherCareer(claves:ClavesCarrera[],idd:string){
    this.http.post(`${this.urlBase}/administrativo/registro-carrerasd/${idd}/`, claves)
      .subscribe((resp: any) => {
        console.log(resp)
        alert("CARRERAS ASIGNADAS")
      }, error => {
        console.log("no se pudo master")
        alert("ERROR AL ASIGNAR CARRERAS")
      })
  }
  getSubjectsCareer(carrera:string){
    this.http.get<SubjectInterface[]>(`${this.urlBase}/materias/carrera/${carrera}`)
      .subscribe((resp:SubjectInterface[])=>{
        console.log(resp)
        this.subjectCareer=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  postAddTecaherSubject(idd:string,claves:AddSubjects[]){
    this.http.post(`${this.urlBase}/administrativo/registro-materiasd/${idd}/`, claves)
      .subscribe((resp: any) => {
        console.log(resp)
        alert("MATERIAS ASIGNADAS")
      }, error => {
        console.log("no se pudo master")
        alert("ERROR AL ASIGNAR MATERIAS")
      })
  }
  getAllSubjects(){
    this.http.get<AllSubjects[]>(`${this.urlBase}/materias`)
      .subscribe((resp:AllSubjects[])=>{
        console.log(resp)
        this.allSubject=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getGroupsSubject(carrera:string){
    this.http.get<GruposMateria[]>(`${this.urlBase}/horario/grupos/carrerass/${carrera}`)
      .subscribe((resp:GruposMateria[])=>{
        console.log(resp)
        this.gruposMateria=resp
      },error => {
        console.log("no se pudo master")
      })
  }
  getDataDocente(id_admin:string){
    this.http.get<PersonInterface>(`${this.urlBase}/administrativo/id/${id_admin}`)
      .subscribe((resp:PersonInterface)=>{
        console.log(resp)
        this.dataDocente=resp
      },error => {
        console.log("no se pudo master")
      })
  }
}
