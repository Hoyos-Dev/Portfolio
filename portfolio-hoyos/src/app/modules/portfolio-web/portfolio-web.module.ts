import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    PortfolioWebRoutingModule
  ]
})
export class PortfolioWebModule { }