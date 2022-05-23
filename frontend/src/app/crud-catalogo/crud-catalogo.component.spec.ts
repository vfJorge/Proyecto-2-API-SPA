import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCatalogoComponent } from './crud-catalogo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CrudCatalogoComponent', () => {
  let component: CrudCatalogoComponent;
  let fixture: ComponentFixture<CrudCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule ,
        FormsModule, 
        ReactiveFormsModule,
      ],
      declarations: [ CrudCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Producto eliminado', () => {
    component.datosProducto.controls['type'].setValue('anime');
    component.datosProducto.controls['name'].setValue('Gintama');
    component.datosProducto.controls['img'].setValue('https://cdn.myanimelist.net/images/anime/10/73274.jpg');
    component.datosProducto.controls['price'].setValue('2068.30');
    component.datosProducto.controls['stockQty'].setValue('3');
    expect(component.eliminarProducto(component.datosProducto)).toBeTrue();
  });

  it('Producto agregado', () => {
    component.datosProducto.controls['type'].setValue('anime');
    component.datosProducto.controls['name'].setValue('Gintama');
    component.datosProducto.controls['img'].setValue('https://cdn.myanimelist.net/images/anime/10/73274.jpg');
    component.datosProducto.controls['price'].setValue('2068.30');
    component.datosProducto.controls['stockQty'].setValue('3');
    expect(component.agregarProducto(component.datosProducto)).toBeTrue();
  });

  it('Producto editado', () => {
    component.datosProducto.controls['type'].setValue('anime');
    component.datosProducto.controls['name'].setValue('Gintama');
    component.datosProducto.controls['img'].setValue('https://cdn.myanimelist.net/images/anime/10/73274.jpg');
    component.datosProducto.controls['price'].setValue('2068.30');
    component.datosProducto.controls['stockQty'].setValue('3');
    expect(component.editarProducto(component.datosProducto)).toBeTrue();
  });

});
