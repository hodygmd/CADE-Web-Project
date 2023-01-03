import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { MateriasComponent } from './pages/materias/materias.component';
import {MenuRoutingModule} from "./menu-routing.module";
import { GruposComponent } from './pages/grupos/grupos.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { DocentePrincipalComponent } from './pages/docente-principal/docente-principal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MateriasComponent,
    GruposComponent,
    CalificacionesComponent,
    DocentePrincipalComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
