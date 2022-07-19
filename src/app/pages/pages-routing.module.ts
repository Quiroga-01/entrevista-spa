import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { ProspectosComponent } from './prospectos/prospectos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vacantes',
        component: VacantesComponent
      },
      {
        path: 'prospectos',
        component: ProspectosComponent
      },
      {
        path: 'entrevistas',
        component: EntrevistasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
