import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api1Component } from './api1.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidaremailService } from '../services/validaremail.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Test Api1Component', () => {
  let component: Api1Component;
  let fixture: ComponentFixture<Api1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule ,
        FormsModule, 
        ReactiveFormsModule,
      ],
      declarations: [ 
        Api1Component 
      ],
      providers: [ 
        ValidaremailService 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Api1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Email valido', () => {
    component.sendEmail('ed_leo1411@hotmail.com');
    expect(component.validacionEmail).toBeFalse();
  });
});
