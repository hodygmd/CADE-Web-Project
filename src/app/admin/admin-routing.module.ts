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

const routes: Routes=[
  {path: '',
    component:SidebarComponent,
    children:[
      {path: 'actualizar-admin',component:ActualizarAdminComponent},
      {path: 'admin-principal',component:AdminPrincipalComponent},
      {path: 'cargas',component:CargasComponent},
      {path: 'carreras',component:CarrerasComponent},
      {path: 'grupos',component:GruposComponent},
      {path: 'validar-cargas',component:ValidarCargasComponent},
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
