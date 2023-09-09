import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavHeaderPerfilComponent } from './sidenav-header-perfil.component';

describe('ToolbarPerfilComponent', () => {
  let component: SidenavHeaderPerfilComponent;
  let fixture: ComponentFixture<SidenavHeaderPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavHeaderPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavHeaderPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
