import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginRegisterService } from '../services/login-register.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule ,
        FormsModule, 
        ReactiveFormsModule,
      ],
      declarations: [ LoginComponent ],
      providers: [ LoginRegisterService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has logged in', () => {
    component.validateForm.controls['email'].setValue('tilin@gmail.com');
    component.validateForm.controls['password'].setValue('etesech');
    expect(component.submitForm(component.validateForm)).toBeTrue();
  });
});
