import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { VeiculoCardComponent } from './veiculo-card/veiculo-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AddVeiculoFormComponent } from './add-veiculo-form/add-veiculo-form.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    VeiculoCardComponent,
    PageHeaderComponent,
    AddVeiculoFormComponent
  ],
  exports: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
