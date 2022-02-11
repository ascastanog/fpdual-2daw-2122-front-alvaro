import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre:string="Álvaro Castaño";
  iniciales:string=this.inicialesCap(this.nombre);
  constructor() {
  }

  ngOnInit(): void {

  }

// @ts-ignore
  inicialesCap(nombre:string):string{
    let iniciales:string
    let mayus:string=nombre.toUpperCase();
    iniciales=mayus.slice(0,1);
  for (let i = 0; i < mayus.length; i++) {
    if (mayus[i] == ' ') {

      iniciales=iniciales+mayus[i+1];


    }

  }
    return iniciales;
}


}
