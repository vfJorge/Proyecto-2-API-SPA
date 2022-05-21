import { TestBed } from '@angular/core/testing';

import { EnviaremailService } from './enviaremail.service';

describe('EnviaremailService', () => {
  let service: EnviaremailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaremailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
