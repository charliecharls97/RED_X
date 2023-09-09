import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListContactosComponent } from './nav-list-contactos.component';

describe('NavListContactosComponent', () => {
  let component: NavListContactosComponent;
  let fixture: ComponentFixture<NavListContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
