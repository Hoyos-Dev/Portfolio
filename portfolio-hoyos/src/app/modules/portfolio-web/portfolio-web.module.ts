import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebRoutingModule } from './portfolio-web-routing.module';
import { OrquestadorComponent } from './pages/orquestador/orquestador.component';
import { WebComponent } from './components/web/web.component';

@NgModule({
  declarations: [
    OrquestadorComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    PortfolioWebRoutingModule
  ]
})
export class PortfolioWebModule { }