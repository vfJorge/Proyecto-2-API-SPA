import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api4Component } from './api4.component';

describe('Api4Component', () => {
  let component: Api4Component;
  let fixture: ComponentFixture<Api4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Api4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Api4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
