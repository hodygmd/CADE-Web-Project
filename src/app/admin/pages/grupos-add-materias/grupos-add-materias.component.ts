import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-grupos-add-materias',
  templateUrl: './grupos-add-materias.component.html',
  styleUrls: ['./grupos-add-materias.component.css']
})
export class GruposAddMateriasComponent {
  ididCarrera:any=localStorage.getItem("ididCarrera")

  constructor(private service: ApiServiceService,private router: Router) {}

  get gruposMateria():any{
    return this.service.gruposMateria
  }

  ngOnInit(): void {
    this.service.getGroupsSubject(this.ididCarrera)
    localStorage.removeItem("idGrupo")
  }
  getGrupo(idGrupo:string){
    localStorage.setItem("idGrupo",idGrupo)
    this.router.navigate(['/admin/asignar-materias'])
  }
  back(){
    localStorage.removeItem("idDocenteAddSubject")
  }

}
