import { Component, Input } from '@angular/core';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'veiculo-card',
  templateUrl: './veiculo-card.component.html'
})
export class VeiculoCardComponent {
  @Input() veiculo?: Veiculo;
}
