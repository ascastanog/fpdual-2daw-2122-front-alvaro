import { Component, OnInit } from '@angular/core';
import {MovilService} from "../../service/movil.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public service:MovilService) { }

  ngOnInit(): void {
  }

}
