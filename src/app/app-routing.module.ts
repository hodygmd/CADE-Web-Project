import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {LoginComponent} from "./auth/pages/login/login.component";

const routes: Routes=[
  {path: 'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'menu',loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)},
  {path: 'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path: '404',component:ErrorPageComponent},
  {path: '**',component:LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
