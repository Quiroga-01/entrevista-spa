import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Vacante } from '../interfaces/vacantes';
import { RespuestaGets, RespuestaPost } from '../interfaces/response';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGuardarVacanteComponent } from '../pages/vacantes/components/modal-guardar-vacante/modal-guardar-vacante.component'
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class VacantesService {

  modalVacante: NgbModalRef;
  $listado = new EventEmitter();

  constructor (private http: HttpClient, public modalService: NgbModal) { }



  obtenerVacantes () {
    return this.http.get<RespuestaGets<Vacante>>(`${base_url}/vacantes`);
  }

  crearVacante (formDate: Vacante) {
    return this.http.post<RespuestaPost<Vacante>>(`${base_url}/vacantes`, formDate);
  }

  editarVacante (formDate: Vacante) {
    return this.http.put<RespuestaPost<Vacante>>(`${base_url}/vacantes/${formDate.id}`, formDate);
  }

  abrirModalVacante (vacante?: Vacante) {
    this.modalVacante = this.modalService.open(ModalGuardarVacanteComponent, { size: 'lg', backdrop: 'static' });
    this.modalVacante.componentInstance.vacante = vacante;
    this.modalVacante.result.then((result) => {
      this.$listado.emit();
    })
      .catch(err => {
        console.log(err);
      });
  }



}
