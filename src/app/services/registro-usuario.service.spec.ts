import { TestBed, inject } from '@angular/core/testing';

import { RegistroUsuarioService } from './registro-usuario.service';

describe('RegistroUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroUsuarioService]
    });
  });

  it('should be created', inject([RegistroUsuarioService], (service: RegistroUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
