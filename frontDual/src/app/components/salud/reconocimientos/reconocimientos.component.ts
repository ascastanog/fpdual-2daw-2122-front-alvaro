import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reconocimientos',
  templateUrl: './reconocimientos.component.html',
  styleUrls: ['./reconocimientos.component.css']
})
export class ReconocimientosComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  reconocimiento:Reconocimiento= new Reconocimiento("24 de marzo", "Técnico de procesos", "Reconocimiento periódico",
    ["asma","ruidos","cargas"], "21 de marzo de 2023", "Bianual");
  reconocimiento2:Reconocimiento=new Reconocimiento("24 de marzo", "Técnico de procesos", "Reconocimiento periódico",
    ["asma","ruidos","cargas"], "21 de marzo de 2023", "Bianual");
  reconocimientos:Reconocimiento[]= [this.reconocimiento, this.reconocimiento2];

}
  class Reconocimiento{
  fecha:string;
  puesto:string;
  motivo:string;
  protocolos:string[];
  proximoReconocimiento:string;
  periodicidad:string;


  constructor(fecha: string, puesto: string, motivo: string, protocolos: string[], proximoReconocimiento: string, periodicidad: string) {
    this.fecha = fecha;
    this.puesto = puesto;
    this.motivo = motivo;
    this.protocolos = protocolos;
    this.proximoReconocimiento = proximoReconocimiento;
    this.periodicidad = periodicidad;
  }

}
