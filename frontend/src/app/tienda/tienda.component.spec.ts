import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaComponent } from './tienda.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TiendaComponent', () => {
  let component: TiendaComponent;
  let fixture: ComponentFixture<TiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule ,
      ],
      declarations: [ TiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Catalogo de la tienda', () => {
    expect(component.ArticulosRecibidos).not.toBeNull();
  });

  it('Tipo de cliente admin', () => {
    expect(component.verificarTipoCliente()).toBeTrue();
  });
});
