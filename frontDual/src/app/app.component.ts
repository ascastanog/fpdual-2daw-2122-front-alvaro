import { Component } from '@angular/core';
import {MovilService} from "./service/movil.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontDual';

  constructor(private movil:MovilService) {
    this.movil.observar();
  }

}
