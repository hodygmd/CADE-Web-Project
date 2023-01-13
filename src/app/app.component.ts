import {Component} from '@angular/core';
import {ApiServiceService} from "./api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CADE';

  /*constructor(private service: ApiServiceService) {
  }

  get respuesta(): any {
    return this.service.respuesta
  }

  sesion(nombre: string, contra: string) {
    this.service.auth(nombre, contra)
  }*/
}
