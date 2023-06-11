import { TestBed } from '@angular/core/testing';

import { VeiculoFormService } from './veiculo-form.service';

describe('VeiculoFormService', () => {
  let service: VeiculoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
