import { Component, DoCheck, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-perfil',
  templateUrl: './sidenav-perfil.component.html',
  styleUrls: ['./sidenav-perfil.component.css']
})
export class SidenavPerfilComponent implements OnInit, DoCheck {

  @ViewChild('drawer') sidenav: MatSidenav | undefined;
  public sidenavWidth: number;


  constructor(private breakpointObserver: BreakpointObserver) {
    this.sidenavWidth = 400; // Ancho inicial del mat-sidenav
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  ngOnInit(): void {
    
  }

  ngDoCheck(): void {

  }
/* 
  ngAfterViewInit() { // metodo para realizar acciones unaves el elemento se haya cargado completamente
    // Verificar si el sidenav se ha cargado completamente
    if (this.sidenav) {
      // Realiza acciones una vez que el sidenav se haya cargado completamente.
      console.log('El sidenav se ha cargado completamente.');
      this.sidenav?.open(); //abrir el sidebar
    }
  }
*/

  

  toggleSidenav() {
    
    if (this.sidenavWidth === 400) {
      this.sidenav?.open();
      this.sidenavWidth = 200; // Cambia el ancho a 50px al hacer toggle
    } else if (this.sidenavWidth === 200) {
      if (this.sidenav?.opened) {
        this.sidenav.close();
      } else {
        this.sidenav?.open();
        this.sidenavWidth = 400;
      }
    } else {
      this.sidenavWidth = 400;
    }
  }


}
