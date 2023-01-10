import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { MateriasComponent } from './pages/materias/materias.component';
import {MenuRoutingModule} from "./menu-routing.module";
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { DocentePrincipalComponent } from './pages/docente-principal/docente-principal.component';
import { ActualizarDocenteComponent } from './pages/actualizar-docente/actualizar-docente.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MateriasComponent,
    CalificacionesComponent,
    DocentePrincipalComponent,
    ActualizarDocenteComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
