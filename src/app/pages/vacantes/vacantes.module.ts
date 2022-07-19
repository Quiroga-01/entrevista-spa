import { ModalGuardarVacanteComponent } from './components/modal-guardar-vacante/modal-guardar-vacante.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacantesComponent } from './vacantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './components/listado/listado.component';
import { ListadoHeadComponent } from './components/listado-head/listado-head.component';
import { ListadoBodyComponent } from './components/listado-body/listado-body.component';
import { NgbPagination, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    VacantesComponent,
    ModalGuardarVacanteComponent,
    ListadoComponent,
    ListadoHeadComponent,
    ListadoBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class VacantesModule { }
