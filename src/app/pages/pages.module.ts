import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { AddVeiculoComponent } from './add-veiculo/add-veiculo.component';
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    VeiculoListComponent,
    AddVeiculoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
