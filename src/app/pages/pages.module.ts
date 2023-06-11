import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { AddVeiculoComponent } from './add-veiculo/add-veiculo.component';



@NgModule({
  declarations: [
    VeiculoListComponent,
    AddVeiculoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
