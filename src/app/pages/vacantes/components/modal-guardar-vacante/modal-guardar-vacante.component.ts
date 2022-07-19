import { FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vacante } from '../../../../interfaces/vacantes';
import { VacantesService } from '../../../../services/vacantes.service';
@Component({
  selector: 'app-modal-guardar-vacante',
  templateUrl: './modal-guardar-vacante.component.html',
  styleUrls: ['./modal-guardar-vacante.component.scss']
})
export class ModalGuardarVacanteComponent implements OnInit {

  @Input() vacante: Vacante;
  vacanteForm: FormGroup;
  submitted = false;
  constructor (public modal: NgbActiveModal, private fb: FormBuilder, private vacanteService: VacantesService) { }

  ngOnInit (): void {
    this.buildItemForm(this.vacante || {});
  }

  private buildItemForm (vacante: Vacante) {
    this.vacanteForm = this.fb.group({
      id: [vacante.id || 0, []],
      area: [vacante.area || '', [Validators.required]],
      sueldo: [vacante.sueldo || null, [Validators.required, Validators.min(1)]],
      activo: [vacante.activo || 1, []]
    })
  }

  get f () {
    return this.vacanteForm.controls;
  }

  submitForm () {
    this.submitted = true;
    if (this.vacanteForm.invalid) {
      return;
    }

    if (this.vacanteForm.get('id')?.value == 0) {
      this.crearVacante();
    } else {
      this.actualizarVacante();
    }
  }

  crearVacante () {
    this.vacanteService.crearVacante(this.vacanteForm.value)
      .subscribe(resp => {
        console.log(resp);
        this.modal.close();
      },
        err => {
          console.log(err);
        }
      )
  }

  actualizarVacante () {
    this.vacanteService.editarVacante(this.vacanteForm.value)
      .subscribe(resp => {
        console.log(resp);
        this.modal.close();
      },
        err => {
          console.log(err);
        }
      )
  }

}
