


import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class MovilService {
  private _ismobile:boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) {
  }

  observar() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.HandsetPortrait,Breakpoints.HandsetLandscape])
      .subscribe((state: BreakpointState) => {
        this._ismobile = state.matches;
      })
  }

  get ismobile():boolean{
    return this._ismobile;
  }
}
