import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visitante } from 'src/app/core/shared/models/portafolio.models';
import { PortafolioService } from 'src/app/core/shared/services/portafolio.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-curriculum',
  templateUrl: './ver-curriculum.component.html',
})
export class VerCurriculumComponent implements OnInit {
  public loginForm: FormGroup;
  public bloqueraBtn: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private portafolioService: PortafolioService
  ) {
    this.loginForm = this.formBuilder.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }

  ngOnInit() {}

  enviarFormulario() {
    if (this.loginForm.valid) {
      this.bloqueraBtn = true;
      let correo = this.loginForm.get('correo')?.value;
      const body: Visitante = {
        correo,
        nombre: 'prueba',
        img: 'no-img',
      };
      this.portafolioService.loginVisitante(body).subscribe(
        (resp) => {
          console.log(resp.visitante.msg);
          localStorage.setItem('token', resp.visitante.token);
          let btnCerrar = document.getElementById('btnCerrar');
          btnCerrar?.click();
          this.router.navigate(['curriculum']);
        },
        (err) => {
          console.warn(err.error.err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo siento, no tiene permiso para ver el curriculum.',
            footer: `<p class="text-center">${err.error.err.msg}</p>`,
          });
          this.bloqueraBtn = false;
          console.warn('ERROR!!!', err);
        }
      );
    }
  }
  limpiarFormulario() {
    this.loginForm.reset({ correo: '' });
  }
}
