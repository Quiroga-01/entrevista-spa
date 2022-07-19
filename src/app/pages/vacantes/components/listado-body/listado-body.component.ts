import { VacantesService } from './../../../../services/vacantes.service';
import { Vacante } from '../../../../interfaces/vacantes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbody[app-listado-body]',
  templateUrl: './listado-body.component.html',
  styleUrls: ['./listado-body.component.scss']
})
export class ListadoBodyComponent implements OnInit {

  @Input() vacantes: Vacante[] = [];

  constructor (public vacantesService: VacantesService) { }

  ngOnInit (): void {
  }



}
