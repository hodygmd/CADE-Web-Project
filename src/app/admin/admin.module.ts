import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPrincipalComponent } from './pages/admin-principal/admin-principal.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { CargasComponent } from './pages/cargas/cargas.component';
import { ValidarCargasComponent } from './pages/validar-cargas/validar-cargas.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { ActualizarAdminComponent } from './pages/actualizar-admin/actualizar-admin.component';
import { SemestresComponent } from './pages/semestres/semestres.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AdminPrincipalComponent,
    CarrerasComponent,
    GruposComponent,
    CargasComponent,
    ValidarCargasComponent,
    SidebarComponent,
    ActualizarAdminComponent,
    SemestresComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
