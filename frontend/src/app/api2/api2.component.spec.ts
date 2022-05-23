import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api2Component } from './api2.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Api2Component', () => {
  let component: Api2Component;
  let fixture: ComponentFixture<Api2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ Api2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Api2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Catalogo de comics', () => {
    expect(component.ComicsRecibidos).not.toBeNull();
  });
});
