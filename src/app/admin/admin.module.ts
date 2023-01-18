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
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { AdministrativosComponent } from './pages/administrativos/administrativos.component';
import { DocentesCCarreraComponent } from './pages/docentes-ccarrera/docentes-ccarrera.component';
import { AsignarCarrerasComponent } from './pages/asignar-carreras/asignar-carreras.component';
import { AsignarMateriasComponent } from './pages/asignar-materias/asignar-materias.component';
import { GruposAddMateriasComponent } from './pages/grupos-add-materias/grupos-add-materias.component';
import { ActualizarDocentesComponent } from './pages/actualizar-docentes/actualizar-docentes.component';
import { AddDocenteComponent } from './pages/add-docente/add-docente.component';
import { AddAdministrativoComponent } from './pages/add-administrativo/add-administrativo.component';
import { ActualizarAdministrativosComponent } from './pages/actualizar-administrativos/actualizar-administrativos.component';
import { AddAlumnoComponent } from './pages/add-alumno/add-alumno.component';
import { ActualizarAlumnosComponent } from './pages/actualizar-alumnos/actualizar-alumnos.component';
import { AllDocentesComponent } from './pages/all-docentes/all-docentes.component';

@NgModule({
  declarations: [
    AdminPrincipalComponent,
    CarrerasComponent,
    GruposComponent,
    CargasComponent,
    ValidarCargasComponent,
    SidebarComponent,
    ActualizarAdminComponent,
    SemestresComponent,
    UsuariosComponent,
    DocentesComponent,
    AdministrativosComponent,
    DocentesCCarreraComponent,
    AsignarCarrerasComponent,
    AsignarMateriasComponent,
    GruposAddMateriasComponent,
    ActualizarDocentesComponent,
    AddDocenteComponent,
    AddAdministrativoComponent,
    ActualizarAdministrativosComponent,
    AddAlumnoComponent,
    ActualizarAlumnosComponent,
    AllDocentesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
