import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {InformacionComponent} from "./components/informacion/informacion.component";

import {PrevencionComponent} from "./components/prevencion/prevencion.component";
import {CitaComponent} from "./components/cita/cita.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {LoginComponent} from "./components/login/login.component";
import {AnaliticasComponent} from "./components/salud/analiticas/analiticas.component";
import {GuiasComponent} from "./components/salud/guias/guias.component";
import {ReconocimientosComponent} from "./components/salud/reconocimientos/reconocimientos.component";
import {ContactoComponent} from "./components/contacto/contacto.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'salud/reconocimientos', component:ReconocimientosComponent},
  {path: 'prevencion', component:PrevencionComponent},
  {path: 'cita', component:CitaComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'salud/analiticas', component:AnaliticasComponent},
  {path: 'salud/guias', component:GuiasComponent},
  {path: 'perfil', component:PerfilComponent},
  {path:'contacto', component:ContactoComponent},



  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
