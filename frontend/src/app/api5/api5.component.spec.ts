import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api5Component } from './api5.component';

describe('Api5Component', () => {
  let component: Api5Component;
  let fixture: ComponentFixture<Api5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });
});
