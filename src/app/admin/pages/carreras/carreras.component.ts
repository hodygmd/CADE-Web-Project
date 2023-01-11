import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from "../../../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit{

  constructor(private service: ApiServiceService,private router: Router) {}

  get carrera():any{
    return this.service.carrera
  }

  ngOnInit(): void {
    this.service.getCareer()

  }
  getCarrera(idCarrera:string){
    localStorage.setItem("idCarrera",idCarrera)
    this.router.navigate(['/admin/grupos'])
  }
}
