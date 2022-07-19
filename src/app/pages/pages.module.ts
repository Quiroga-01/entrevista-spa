import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { VacantesModule } from './vacantes/vacantes.module';


@NgModule({
  declarations: [
    ProspectosComponent,
    EntrevistasComponent,
  ],
  imports: [
    CommonModule,
    VacantesModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
