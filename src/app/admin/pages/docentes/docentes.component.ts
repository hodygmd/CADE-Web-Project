import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit{

  constructor(private service:ApiServiceService,private router:Router) {}

  get carrera():any{
    return this.service.carrera
  }

  get emptyTeacher():any{
    return this.service.emptyTeacher
  }

  ngOnInit(): void {
    this.service.getCareer()
    this.service.getEmptyTeacher()
  }

  next(idCarrera:string){
    localStorage.setItem("idCarrera",idCarrera)
    console.log(idCarrera)
  }

}
