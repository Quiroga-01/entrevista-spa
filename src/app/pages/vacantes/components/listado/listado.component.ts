import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { VacantesService } from '../../../../services/vacantes.service';
import { Vacante } from '../../../../interfaces/vacantes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnDestroy {

  vacantes: Vacante[] = [];
  listado: Subscription;
  page: number = 1;
  previosPage: number;
  limit: number = 5;
  currentPageSize: number;
  totalItems: number;
  constructor (private vacantesServices: VacantesService) { }

  ngOnInit (): void {
    this.obtenerVacantes();
    this.listado = this.vacantesServices.$listado
      .subscribe(() => {
        this.obtenerVacantes();
      })
  }

  loadPage (pagina: number) {
    this.page = pagina;
    this.obtenerVacantes();
  }


  obtenerVacantes () {
    this.vacantesServices.obtenerVacantesPaginado(this.limit, this.page)
      .subscribe(resp => {
        this.vacantes = resp.registros
        this.currentPageSize = resp.currentPageSize;
        this.totalItems = resp.totalItems;
        this.page = resp.currentPageNumber;
      },
        err => {
          console.log(err)
        }
      )
  }

  ngOnDestroy (): void {
    this.listado.unsubscribe();
  }

}
