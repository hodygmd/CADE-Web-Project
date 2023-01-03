import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonInterface } from './person-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public respuesta?:PersonInterface

  constructor(private http: HttpClient) {
  }

  auth(nombre: String, contra: String) {
    this.http.get<PersonInterface>(`http://ec2-18-118-155-139.us-east-2.compute.amazonaws.com:8081/administrativo/authv2?nombre=${nombre}&contra=${contra}`)
    .subscribe(resp => {
      this.respuesta=resp
      console.log(resp)
    }, error => {
      console.log("no se pudo master")
    })
  }
}
