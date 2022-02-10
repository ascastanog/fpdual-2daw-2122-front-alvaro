import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analiticas',
  templateUrl: './analiticas.component.html',
  styleUrls: ['./analiticas.component.css']
})
export class AnaliticasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
analitica:Analitica= new Analitica("19 Feb 2021", "Z8364887", "Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque,",
  "Mugaritz", "Errenteria");
  analitica2:Analitica= new Analitica("27 May 2025", "Z8323487", "Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque,",
    "Kitchen", "Madrid");
  analiticas: Analitica[]=[this.analitica, this.analitica2];

}

class Analitica{
  fecha:string;
  referencia:string;
  observaciones:string;
  empresa:string;
  lugar:string;


  constructor(fecha: string, referencia: string, observaciones: string, empresa: string, lugar: string) {
    this.fecha = fecha;
    this.referencia = referencia;
    this.observaciones = observaciones;
    this.empresa = empresa;
    this.lugar = lugar;
  }

}
