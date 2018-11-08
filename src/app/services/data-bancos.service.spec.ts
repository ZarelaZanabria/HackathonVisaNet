import { TestBed, inject } from '@angular/core/testing';

import { DataBancosService } from './data-bancos.service';

describe('DataBancosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBancosService]
    });
  });

  it('should be created', inject([DataBancosService], (service: DataBancosService) => {
    expect(service).toBeTruthy();
  }));
});
