import { VacantesService } from './../../../../services/vacantes.service';
import { Vacante } from '../../../../interfaces/vacantes';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'tbody[app-listado-body]',
  templateUrl: './listado-body.component.html',
  styleUrls: ['./listado-body.component.scss']
})
export class ListadoBodyComponent implements OnInit {

  toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false
  })

  @Input() vacantes: Vacante[] = [];

  constructor (public vacantesService: VacantesService) { }

  ngOnInit (): void {
  }

  cambiarEstado (idVacante: number, estado: string) {
    Swal.fire({
      icon: 'question',
      title: `¿Cambiar estado a: "${estado}"?`,
      showConfirmButton: true,
      confirmButtonText: 'Sí',
      showCancelButton: true,
      reverseButtons: true
    })
      .then(resp => {
        if (resp.isConfirmed) {
          this.vacantesService.cambiarEstado(idVacante)
            .subscribe(() => {
              this.vacantesService.$listado.emit();
              this.toast.fire({
                icon: 'success',
                title: 'Exito'
              })
            },
              err => {
                this.toast.fire({
                  icon: 'error',
                  title: 'Error'
                })
              }
            )
        }
      });
  }



}
