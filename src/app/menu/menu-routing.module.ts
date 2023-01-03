import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MateriasComponent} from "./pages/materias/materias.component";
import {SidebarComponent} from "./pages/sidebar/sidebar.component";
import {GruposComponent} from "./pages/grupos/grupos.component";
import {CalificacionesComponent} from "./pages/calificaciones/calificaciones.component";
import {DocentePrincipalComponent} from "./pages/docente-principal/docente-principal.component";

const routes: Routes=[
  {path: '',
    component:SidebarComponent,
  children:[
    {path: 'docente-principal',component:DocentePrincipalComponent},
    {path: 'materias',component:MateriasComponent},
    {path: 'grupos',component:GruposComponent},
    {path: 'calificaciones',component:CalificacionesComponent},
    {path: '**',redirectTo:'docente-principal'}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MenuRoutingModule { }
