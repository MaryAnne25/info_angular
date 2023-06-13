import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { AddVeiculoComponent } from './add-veiculo/add-veiculo.component';
import { ComponentsModule } from '../components/components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VeiculoListComponent,
    AddVeiculoComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        MatButtonModule,
        MatIconModule,
        TranslateModule
    ]
})
export class PagesModule { }
