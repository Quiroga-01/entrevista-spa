import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Vacante } from '../interfaces/vacantes';
import { RespuestaRegistos, Respuesta, RespuestaPaginada } from '../interfaces/response';
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

  obtenerVacantesPaginado (limit: number, page: number) {
    const params = new HttpParams().set('limit', limit).set('page', page);
    return this.http.get<RespuestaPaginada<Vacante>>(`${base_url}/vacantes`, { params });
  }

  crearVacante (formDate: Vacante) {
    return this.http.post<Respuesta<Vacante>>(`${base_url}/vacantes`, formDate);
  }

  editarVacante (formDate: Vacante) {
    return this.http.put<Respuesta<Vacante>>(`${base_url}/vacantes/${formDate.id}`, formDate);
  }

  cambiarEstado (idVacante: number) {
    return this.http.delete<Respuesta<Vacante>>(`${base_url}/vacantes/${idVacante}`);
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
