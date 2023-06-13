import { Component } from '@angular/core';
import { VeiculoFormService } from '../../services/veiculo-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html'
})
export class AddVeiculoComponent {
    constructor(public form: VeiculoFormService, private router: Router, private activatedRoute: ActivatedRoute) { }

    cancel(): void {
      this.form.formGroup.reset()
      this.router.navigate(['/veiculos'], { relativeTo: this.activatedRoute });
    }

    submitForm(): void {
      this.form.submit()
      this.form.formGroup.reset()
      this.router.navigate(['/veiculos'], { relativeTo: this.activatedRoute });
    }
}
