import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavPerfilComponent } from './sidenav-perfil/sidenav-perfil.component';
import { SidenavHeaderPerfilComponent } from './sidenav-perfil/sidenav-header-perfil/sidenav-header-perfil.component';
import { NavListContactosComponent } from './sidenav-perfil/nav-list-contactos/nav-list-contactos.component';
import { FormLoginComponent } from './form-login/form-login.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavPerfilComponent,
    SidenavHeaderPerfilComponent,
    NavListContactosComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
