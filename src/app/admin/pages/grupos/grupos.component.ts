import { Component } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {
  idCarrera:any=localStorage.getItem("idCarrera")

  constructor(private service: ApiServiceService,private router: Router) {}

  get grupo():any{
    return this.service.grupo
  }

  ngOnInit(): void {
    this.service.getGroups(this.idCarrera)
  }
  getGrupo(idGrupo:string){
    localStorage.setItem("idGrupo",idGrupo)
    this.router.navigate(['/admin/cargas'])
  }
}
