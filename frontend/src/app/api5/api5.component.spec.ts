import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api5Component } from './api5.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Api5Component', () => {
  let component: Api5Component;
  let fixture: ComponentFixture<Api5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule ,
        FormsModule, 
        ReactiveFormsModule,
      ],
      declarations: [ Api5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Api5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.datosEmail.controls['nombreCompleto'].setValue('Eduardo Echeverria');
    component.datosEmail.controls['correo'].setValue('ed_leo1411@hotmail.com');
    component.datosEmail.controls['comentarios'].setValue('La página me gusta y es interesante.');
    expect(component.sendCorreo(component.datosEmail)).toBeTrue();
  });
});
