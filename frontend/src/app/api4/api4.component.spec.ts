import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api4Component } from './api4.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Api4Component', () => {
  let component: Api4Component;
  let fixture: ComponentFixture<Api4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ Api4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Api4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Catalogo de animes', () => {
    expect(component.AnimesRecibidos).not.toBeNull();
  });
});
