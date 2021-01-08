/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VereficaEmailService } from './verefica-email.service';

describe('Service: VereficaEmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VereficaEmailService]
    });
  });

  it('should ...', inject([VereficaEmailService], (service: VereficaEmailService) => {
    expect(service).toBeTruthy();
  }));
});
