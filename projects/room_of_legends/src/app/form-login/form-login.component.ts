import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
[x: string]: any;
  public cardTitulo: string;
  public selectedIndex: number;

  constructor() {
    this.cardTitulo = 'Ingresar';
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
  }

  cambiarTitulo(event: any) : void {
    this.selectedIndex = event.index;

    if (this.selectedIndex === 0) {
      this.cardTitulo = 'Ingresar';
    } else if (this.selectedIndex === 1) {
      this.cardTitulo = 'Crear Cuenta';
    }
    
  }


  

}
