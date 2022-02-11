import { Component, OnInit } from '@angular/core';
import {MovilService} from "../../service/movil.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nombre:string="Isabel";
  apellido1:string= "Gomez";
  apellido2:string="Medina";
  dni:string="52963485M";
  fechaNacimiento:string="15/02/1979";
  telefono:string="639518371";
  email:string="isabel.gomez@sangular.com";
  provincia:string="Madrid";
  localidad:string="Madrid";
  direccion:string="Alonso Cano 17. 5ª";
  cp:string="28010";

  constructor(public service:MovilService) { }

  ngOnInit(): void {
  }

}
