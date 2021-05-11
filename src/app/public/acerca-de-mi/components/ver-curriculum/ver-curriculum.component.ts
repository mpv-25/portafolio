import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-curriculum',
  templateUrl: './ver-curriculum.component.html',
})
export class VerCurriculumComponent implements OnInit {
  public formulario: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      empresa: ['', [Validators.required, Validators.minLength(3)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      contacto: ['', [Validators.required, Validators.minLength(9)]],
      acepta: [false, Validators.required],
    });
  }

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('El formulario es valido', this.formulario.value);
      this.borrarFormulario();
      let modal = document.getElementById('cerrar_modal-identificacion');
      modal?.click();
      this.router.navigateByUrl('curriculum');
    } else {
      console.warn('El Formulario no es valido');
      console.log(this.formulario.value);
    }
  }

  borrarFormulario() {
    this.formulario.reset({
      empresa: '',
      correo: '',
      contacto: '',
      acepta: false,
    });
  }
}
