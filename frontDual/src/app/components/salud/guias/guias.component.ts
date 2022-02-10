import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
guia1:Guia= new Guia( "./assets/pexels-karolina-grabowska-4021769.jpg", "Trabajo con manipulacion de cargas", ["Espalda", "Teletrabajo"]);


  guia2:Guia= new Guia( "./assets/pexels-kindel-media-7298881.jpg", "Columna cervical", ["Espalda"]);

  guia3:Guia= new Guia( "./assets/pexels-karolina-grabowska-4506206.jpg", "Columna dorsal", ["Espalda", "Teletrabajo"]);

  guia4:Guia= new Guia( "./assets/pexels-karolina-grabowska-4506216.jpg", "Columna lumbar", [ "Teletrabajo"]);

  guia5:Guia= new Guia( "./assets/pexels-cottonbro-6191918.jpg", "Como mantener una postura de espalda adecuada en el trabajo", ["Espalda", "Teletrabajo"]);

  guia6:Guia= new Guia( "./assets/pexels-darya-gryazeva-11072353.jpg", "Problemas venosos en piernas", ["Espalda", "Teletrabajo"]);

  guia7:Guia= new Guia( "./assets/pexels-sora-shimazaki-5938558.jpg", "Trabajo con manipulacion de cargas", ["Espalda", "Teletrabajo"]);

  guias:Guia[]=[this.guia1, this.guia2, this.guia3, this.guia4, this.guia5, this.guia6, this.guia7 ];
}

class Guia{
  src:string;
  titulo:string;
  campos:string[];

  constructor(src: string, titulo: string, campos: string[]) {
    this.src = src;
    this.titulo = titulo;
    this.campos = campos;
  }
}
