import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {MovilService} from "../../service/movil.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  valido: string = "Ha sido guardado correctamente";
  popup: boolean = false;
  formulario!: FormGroup;

  email: string = "";

  /*
  formulario={
    email:"",
    motivo:"",
    texto:""
  }
  */


  constructor(private _snackBar: MatSnackBar, public service: MovilService, private formBuilder:FormBuilder) {

    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  openSnackBar() {

    let posicionVertical: MatSnackBarVerticalPosition = 'bottom';
    if (this.service.ismobile) {
      posicionVertical = 'top'
    }
    this._snackBar.open(this.valido, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: posicionVertical
    });
  }


  validar(titulo: any) {
    let input: any = this.formulario.get(titulo);
    return !(input.invalid && input.touched);
  }
  crearFormulario(){
    this.formulario = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      motivo:['',[Validators.required]],
    })
  }
  guardar(formgroup : FormGroup){
    if (formgroup.invalid){
      Object.values(formgroup.controls).forEach(control =>{
        control.markAsTouched()
      })
    }else{
      this.formulario.reset();
      this.openSnackBar()
    }
  }

}
