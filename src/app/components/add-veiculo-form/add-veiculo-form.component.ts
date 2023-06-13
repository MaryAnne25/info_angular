import { Component } from '@angular/core';
import { VeiculoFormService } from '../../services/veiculo-form.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-veiculo-form',
  templateUrl: './add-veiculo-form.component.html'
})
export class AddVeiculoFormComponent {
  constructor(public form: VeiculoFormService) {
    form.formGroup.controls.id.setValue(uuidv4())
  }

  marcas = ['Volkswagen', 'Toyota', 'Ford', 'Volvo', 'Citroen', 'Renault'];
  modelos = new Array<string>()
  modelosVolkswagen = ['Amarok', 'Golf', 'T-Cross', 'Tiguan', 'Up!'];
  modelosRenault = ['Captur', 'Clio', 'Duster', 'Kwid', 'Twingo'];
  modelosCitroen = ['C3', 'C4'];
  modelosFord = ['EcoSport', 'Edge', 'Fiesta', 'Focus'];
  modelosToyota = ['Corolla', 'Highlander', 'Prius', 'Sienna', 'Etios'];
  modelosVolvo = ['C40', 'EX30', 'EX90', 'S60', 'S90'];

  onMarcaChange(): void {
    switch (this.form.formGroup.controls.marca.value) {
      case 'Volkswagen':
        this.modelos = this.modelosVolkswagen;
        break;
      case 'Toyota':
        this.modelos = this.modelosToyota;
        break;
      case 'Renault':
        this.modelos = this.modelosRenault;
        break;
      case 'Citroen':
        this.modelos = this.modelosCitroen;
        break;
      case 'Ford':
        this.modelos = this.modelosFord;
        break;
      case 'Volvo':
        this.modelos = this.modelosVolvo;
        break;
    }
  }
}
