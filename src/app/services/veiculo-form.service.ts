import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class VeiculoFormService {
  formGroup: FormGroup<VeiculoFormGroup>;
  constructor(private localStorage: LocalStorageService) {
    this.formGroup = new FormGroup<VeiculoFormGroup>(<VeiculoFormGroup>{
      id: new FormControl('', { nonNullable: true, validators: Validators.required }),
      placa: new FormControl('', Validators.required),
      chassi: new FormControl('', Validators.required),
      renavam: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      ano: new FormControl(null, [Validators.required, Validators.min(2001), Validators.pattern('^[0-9]*$')]),
    })

    this.formGroup.controls.marca.valueChanges.subscribe((marcaValue) => {
      if(marcaValue != null) {
        this.formGroup.controls.modelo.enable();
      } else {
        this.formGroup.controls.modelo.disable();
      }
    })
  }

  submit(): void {
    this.localStorage.set(this.formGroup.controls.id.value, this.formGroup.value);
  }
}

export type VeiculoFormGroup = {
  id: FormControl<string>;
  placa: FormControl<string | null>;
  chassi: FormControl<string | null>;
  renavam: FormControl<string | null>;
  modelo: FormControl<string | null>;
  marca: FormControl<string | null>;
  ano: FormControl<number | null>;
}
