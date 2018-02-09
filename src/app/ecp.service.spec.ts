import { TestBed, inject } from '@angular/core/testing';

import { EcpService } from './ecp.service';

describe('EcpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcpService]
    });
  });

  it('should be created', inject([EcpService], (service: EcpService) => {
    expect(service).toBeTruthy();
  }));
});
