import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {InformacionComponent} from "./components/informacion/informacion.component";
import {SaludComponent} from "./components/salud/salud.component";
import {PrevencionComponent} from "./components/prevencion/prevencion.component";
import {CitaComponent} from "./components/cita/cita.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'salud', component:SaludComponent},
  {path: 'prevencion', component:PrevencionComponent},
  {path: 'cita', component:CitaComponent},
  {path: 'perfil', component:PerfilComponent},


  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
