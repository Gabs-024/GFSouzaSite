import { TestBed } from '@angular/core/testing';

import { EnviarEmailService } from './enviar-email.service';

describe('EnviarEmailServiceService', () => {
  let service: EnviarEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
