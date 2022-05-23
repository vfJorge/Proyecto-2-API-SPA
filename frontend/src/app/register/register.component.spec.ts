import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule ,
        FormsModule, 
        ReactiveFormsModule,
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.validateForm.controls['name'].setValue('ednover');
    component.validateForm.controls['email'].setValue('ed_leo1411@hotmail.com');
    component.validateForm.controls['password'].setValue('ednover123');
    component.validateForm.controls['checkPassword'].setValue('ednover123');
    expect(component.submitForm(component.validateForm)).toBeTrue();
  });
});
