import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-mininav',
  templateUrl: './mininav.component.html',
  styleUrls: ['./mininav.component.css']
})
export class MininavComponent {

  constructor() { }


  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  sidenavWidth = 250; // Ancho inicial del mat-sidenav

  toggleSidenav() {
    if (this.sidenavWidth === 250) {
      this.sidenavWidth = 50; // Cambia el ancho a 50px al hacer toggle
    } else {
      this.sidenavWidth = 250; // Vuelve al ancho original al hacer toggle nuevamente
    }
  }

}
