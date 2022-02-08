import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  control:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
cambiar(){
    this.control=!this.control;
}
}
