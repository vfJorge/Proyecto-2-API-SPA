import { TestBed } from '@angular/core/testing';

import { ValidaremailService } from './validaremail.service';

describe('ValidaremailService', () => {
  let service: ValidaremailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaremailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
