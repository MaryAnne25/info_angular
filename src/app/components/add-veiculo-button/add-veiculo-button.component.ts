import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-veiculo-button',
  templateUrl: './add-veiculo-button.component.html'
})
export class AddVeiculoButtonComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  addVeiculo(): void {
    this.router.navigate(['../add-veiculo'], {relativeTo: this.activatedRoute})
  }

}
