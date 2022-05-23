import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has logged in', () => {
    (<HTMLInputElement>document.getElementById('email')).value = "softwareenunclic@gmail.com";
    (<HTMLInputElement>document.getElementById('password')).value = "123";
    expect(component.submitForm).toEqual(true);
  });

  it('hasnt logged in', () => {
    (<HTMLInputElement>document.getElementById('email')).value = "ed_leo1411@gmail.com";
    (<HTMLInputElement>document.getElementById('password')).value = "ednover123";
    expect(component.submitForm).toEqual(false);
  })
});
