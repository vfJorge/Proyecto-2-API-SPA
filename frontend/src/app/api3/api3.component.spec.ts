import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api3Component } from './api3.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Api3Component', () => {
  let component: Api3Component;
  let fixture: ComponentFixture<Api3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ Api3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Api3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Catalogo de mangas', () => {
    expect(component.MangasRecibidos).not.toBeNull();
  });
});
