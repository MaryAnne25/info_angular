import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { VeiculoCardComponent } from './veiculo-card/veiculo-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AddVeiculoFormComponent } from './add-veiculo-form/add-veiculo-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { AddVeiculoButtonComponent } from './add-veiculo-button/add-veiculo-button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    VeiculoCardComponent,
    PageHeaderComponent,
    AddVeiculoFormComponent,
    AddVeiculoButtonComponent
  ],
  exports: [
    PageHeaderComponent,
    VeiculoCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
    MatCardModule,
    TranslateModule.forRoot(),
    MatButtonModule
  ]
})
export class ComponentsModule { }
