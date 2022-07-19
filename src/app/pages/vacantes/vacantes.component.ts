import { Component, OnInit } from '@angular/core';
import { VacantesService } from '../../services/vacantes.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.scss']
})
export class VacantesComponent implements OnInit {

  constructor (public vacantesServices: VacantesService) { }

  ngOnInit (): void {
  }

}
