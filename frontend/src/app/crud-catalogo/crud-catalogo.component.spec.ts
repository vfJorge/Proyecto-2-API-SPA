import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCatalogoComponent } from './crud-catalogo.component';

describe('CrudCatalogoComponent', () => {
  let component: CrudCatalogoComponent;
  let fixture: ComponentFixture<CrudCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
