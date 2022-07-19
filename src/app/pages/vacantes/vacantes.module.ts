import { ModalGuardarVacanteComponent } from './components/modal-guardar-vacante/modal-guardar-vacante.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacantesComponent } from './vacantes.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './components/listado/listado.component';
import { ListadoHeadComponent } from './components/listado-head/listado-head.component';
import { ListadoBodyComponent } from './components/listado-body/listado-body.component';



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
    ReactiveFormsModule
  ]
})
export class VacantesModule { }
