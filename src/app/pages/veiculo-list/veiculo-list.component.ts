import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../models/veiculo.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html'
})
export class VeiculoListComponent implements OnInit {
  veiculos: Array<Veiculo> = [];

  constructor(private localStorageService: LocalStorageService) { }
  ngOnInit(): void {
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
      const veiculo = this.localStorageService.get(keys[i]);
      if(veiculo) {
        this.veiculos.push(veiculo);
      }
    }
  }
}
