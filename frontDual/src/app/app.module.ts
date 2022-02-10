import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CitaComponent } from './components/cita/cita.component';
import { PrevencionComponent } from './components/prevencion/prevencion.component';
import { SaludComponent } from './components/salud/salud.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import {LoginComponent} from "./components/login/login.component";
import { PasswordPipe } from './pipes/password.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { AnaliticasComponent } from './components/salud/analiticas/analiticas.component';
import { GuiasComponent } from './components/salud/guias/guias.component';
import { ReconocimientosComponent } from './components/salud/reconocimientos/reconocimientos.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PerfilComponent,
    CitaComponent,
    PrevencionComponent,
    SaludComponent,
    InformacionComponent,
    LoginComponent,
    PasswordPipe,
    FooterComponent,
    AnaliticasComponent,
    GuiasComponent,
    ReconocimientosComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
