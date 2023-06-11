import { Route } from '@angular/router';
import { VeiculoListComponent } from './pages/veiculo-list/veiculo-list.component';
import { AddVeiculoComponent } from './pages/add-veiculo/add-veiculo.component';

export const appRoutes: Route[] = [
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'add-veiculo', component: AddVeiculoComponent },
  { path: '**', redirectTo: 'veiculos' },
]
