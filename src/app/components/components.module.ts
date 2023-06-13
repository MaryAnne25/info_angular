import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { VeiculoCardComponent } from './veiculo-card/veiculo-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AddVeiculoFormComponent } from './add-veiculo-form/add-veiculo-form.component';
import { MAT_ICON_DEFAULT_OPTIONS, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { AddVeiculoButtonComponent } from './add-veiculo-button/add-veiculo-button.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    VeiculoCardComponent,
    PageHeaderComponent,
    AddVeiculoFormComponent,
    AddVeiculoButtonComponent
  ],
  exports: [
    PageHeaderComponent,
    VeiculoCardComponent,
    AddVeiculoFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
    MatCardModule,
    TranslateModule.forRoot(),
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask(),
    {
      provide: MAT_ICON_DEFAULT_OPTIONS,
      useValue: { fontSet: 'material-icons-outlined' },
    },
  ]
})
export class ComponentsModule { }
