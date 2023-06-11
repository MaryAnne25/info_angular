import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoCardComponent } from './veiculo-card/veiculo-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AddVeiculoFormComponent } from './add-veiculo-form/add-veiculo-form.component';



@NgModule({
  declarations: [
    VeiculoCardComponent,
    PageHeaderComponent,
    AddVeiculoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
