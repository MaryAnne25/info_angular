import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VeiculoFormService {
  formGroup: FormGroup<VeiculoFormGroup>;
  constructor() {
    this.formGroup = new FormGroup<VeiculoFormGroup>({
      id: new FormControl('', Validators.required),
      placa: new FormControl('', Validators.required),
      chassi: new FormControl('', Validators.required),
      renavam: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      ano:new FormControl(1950, [Validators.required, Validators.min(1950), Validators.pattern('^[0-9]*$')]),
    })
  }
}

export type VeiculoFormGroup = {
  id: FormControl<string | null>;
  placa: FormControl<string | null>;
  chassi: FormControl<string | null>;
  renavam: FormControl<string | null>;
  modelo: FormControl<string | null>;
  marca: FormControl<string | null>;
  ano: FormControl<number | null>;
}
