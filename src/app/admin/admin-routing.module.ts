import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SidebarComponent} from "./pages/sidebar/sidebar.component";
import {AdminPrincipalComponent} from "./pages/admin-principal/admin-principal.component";
import {CargasComponent} from "./pages/cargas/cargas.component";
import {CarrerasComponent} from "./pages/carreras/carreras.component";
import {GruposComponent} from "./pages/grupos/grupos.component";
import {ValidarCargasComponent} from "./pages/validar-cargas/validar-cargas.component";
import {ActualizarAdminComponent} from "./pages/actualizar-admin/actualizar-admin.component";
import {SemestresComponent} from "./pages/semestres/semestres.component";
import {UsuariosComponent} from "./pages/usuarios/usuarios.component";
import {DocentesComponent} from "./pages/docentes/docentes.component";
import {AdministrativosComponent} from "./pages/administrativos/administrativos.component";
import {DocentesCCarreraComponent} from "./pages/docentes-ccarrera/docentes-ccarrera.component";
import {AsignarCarrerasComponent} from "./pages/asignar-carreras/asignar-carreras.component";
import {AsignarMateriasComponent} from "./pages/asignar-materias/asignar-materias.component";
import {GruposAddMateriasComponent} from "./pages/grupos-add-materias/grupos-add-materias.component";
import {ActualizarDocentesComponent} from "./pages/actualizar-docentes/actualizar-docentes.component";
import {AddDocenteComponent} from "./pages/add-docente/add-docente.component";
import {AddAdministrativoComponent} from "./pages/add-administrativo/add-administrativo.component";
import {
  ActualizarAdministrativosComponent
} from "./pages/actualizar-administrativos/actualizar-administrativos.component";
import {AddAlumnoComponent} from "./pages/add-alumno/add-alumno.component";
import {ActualizarAlumnosComponent} from "./pages/actualizar-alumnos/actualizar-alumnos.component";
import {AllDocentesComponent} from "./pages/all-docentes/all-docentes.component";

const routes: Routes=[
  {path: '',
    component:SidebarComponent,
    children:[
      {path: 'actualizar-admin',component:ActualizarAdminComponent},
      {path: 'admin-principal',component:AdminPrincipalComponent},
      {path: 'cargas',component:CargasComponent},
      {path: 'carreras',component:CarrerasComponent},
      {path: 'grupos',component:GruposComponent},
      {path: 'semestres',component:SemestresComponent},
      {path: 'validar-cargas',component:ValidarCargasComponent},
      {path: 'usuarios',component:UsuariosComponent},
      {path: 'docentes',component:DocentesComponent},
      {path: 'administrativos',component:AdministrativosComponent},
      {path: 'docentes-ccarrera',component:DocentesCCarreraComponent},
      {path: 'asignar-carreras',component:AsignarCarrerasComponent},
      {path: 'asignar-materias',component:AsignarMateriasComponent},
      {path: 'grupos-add-materias',component:GruposAddMateriasComponent},
      {path: 'actualizar-docentes',component:ActualizarDocentesComponent},
      {path: 'add-docente',component:AddDocenteComponent},
      {path: 'add-administrativo',component:AddAdministrativoComponent},
      {path: 'actualizar-administrativos',component:ActualizarAdministrativosComponent},
      {path: 'add-alumno',component:AddAlumnoComponent},
      {path: 'actualizar-alumnos',component:ActualizarAlumnosComponent},
      {path: 'all-docentes',component:AllDocentesComponent},
      {path: '**',redirectTo:'admin-principal'}
    ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
