import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { VacantesService } from '../../../../services/vacantes.service';
import { Vacante } from '../../../../interfaces/vacantes';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnDestroy {

  vacantes: Vacante[] = [];

  constructor (private vacantesServices: VacantesService) { }

  ngOnInit (): void {
    this.obtenerVacantes();
    this.vacantesServices.$listado
      .subscribe(() => {
        this.obtenerVacantes();
      })
  }

  obtenerVacantes () {
    this.vacantesServices.obtenerVacantes()
      .subscribe(resp => {
        this.vacantes = resp.registros
      },
        err => {
          console.log(err)
        }
      )
  }

  ngOnDestroy (): void {
    this.vacantesServices.$listado.complete();
  }

}
