import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrquestadorComponent } from './pages/orquestador/orquestador.component';

const routes: Routes = [
  {
    path: '',
    component: OrquestadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebRoutingModule { }