import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reunion } from 'src/app/core/shared/models/portafolio.models';
import { PortafolioService } from 'src/app/core/shared/services/portafolio.service';
import { Marcador } from '../models/marcador.class';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { ValidadoresService } from 'src/app/core/shared/services/validadores.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent implements OnInit {
  public formularioContacto: FormGroup;
  public lat = -25.3047461;
  public lng = -57.5892688;
  public marcadores: Array<Marcador> = [];
  public fechasOcupado: any[] = [];
  public bloquearBtn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private portafolioService: PortafolioService,
    private validadores: ValidadoresService
  ) {
    this.formularioContacto = this.fb.group(
      {
        empresa: ['', [Validators.required, Validators.minLength(3)]],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        tipoReunion: ['presencial', [Validators.required]],
        urlOnline: ['', [this.validadores.urlValido]],
        mensaje: ['', [Validators.required, Validators.minLength(10)]],
        fecha: [
          '',
          [
            Validators.required,
            this.validadores.formatoFecha,
            this.validadores.fechaValida,
          ],
        ],
        hora: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validators: [
          this.validadores.urlActivo('tipoReunion', 'urlOnline'),
          this.validadores.validarFechaPresencial('tipoReunion', 'fecha'),
        ],
      }
    );
  }

  ngOnInit(): void {
    this.cargarFechasOcupado();
  }

  cargarFechasOcupado() {
    this.portafolioService.getHorasOcupado().subscribe((resp) => {
      this.fechasOcupado = resp;
      localStorage.setItem('fechasOcupado', JSON.stringify(this.fechasOcupado));
    });
  }

  //Gets
  get reunion(): string {
    return this.formularioContacto.get('tipoReunion')?.value || '';
  }
  get errorEmpresa(): boolean {
    return (
      (this.formularioContacto.get('empresa')?.invalid &&
        this.formularioContacto.get('empresa')?.touched) ||
      false
    );
  }
  get errorCorreo(): boolean {
    return (
      (this.formularioContacto.get('correo')?.invalid &&
        this.formularioContacto.get('correo')?.touched) ||
      false
    );
  }
  get errorMensaje(): boolean {
    return (
      (this.formularioContacto.get('mensaje')?.invalid &&
        this.formularioContacto.get('mensaje')?.touched) ||
      false
    );
  }
  get errorFecha(): boolean {
    return (
      (this.formularioContacto.get('fecha')?.invalid &&
        this.formularioContacto.get('fecha')?.touched) ||
      false
    );
  }
  get errorHora(): boolean {
    return (
      (this.formularioContacto.get('hora')?.invalid &&
        this.formularioContacto.get('hora')?.touched) ||
      false
    );
  }
  get errorUrlOnline(): boolean {
    return (
      (this.formularioContacto.get('urlOnline')?.invalid &&
        this.formularioContacto.get('urlOnline')?.touched) ||
      false
    );
  }

  get validEmpresa(): boolean {
    return this.formularioContacto.get('empresa')?.valid || false;
  }

  get validCorreo(): boolean {
    return this.formularioContacto.get('correo')?.valid || false;
  }

  get validFecha(): boolean {
    return this.formularioContacto.get('fecha')?.valid || false;
  }

  get validHora(): boolean {
    return this.formularioContacto.get('hora')?.valid || false;
  }

  //Funtions
  agregarMarcador(event: any) {
    if (true) {
      const coords: { lat: number; lng: number } = event.coords;
      const fecha = this.formularioContacto.get('fecha')?.value || '';
      const hora = this.formularioContacto.get('hora')?.value || '';

      this.marcadores[0] = new Marcador(coords.lat, coords.lng, fecha, hora);

      //Hacer click al mapa
      const mapa = document.getElementById('mapa-google');
      mapa?.click();
    }
  }

  enviarFormulario() {
    if (
      this.formularioContacto.valid &&
      (this.marcadores.length > 0 ||
        this.formularioContacto.get('tipoReunion')?.value == 'online')
    ) {
      this.bloquearBtn = true;
      let body: Reunion = {
        correo: '',
        empresa: '',
        fecha: '',
        hora: '',
        mensaje: '',
        tipoReunion: '',
        ubicacion: { lat: 0, lng: 0 },
        urlOnline: '',
      };
      let correo = this.formularioContacto.get('correo')?.value;
      let empresa = this.formularioContacto.get('empresa')?.value;
      let fecha = this.formularioContacto.get('fecha')?.value;
      let hora = this.formularioContacto.get('hora')?.value;
      let mensaje = this.formularioContacto.get('mensaje')?.value;
      let tipoReunion = this.formularioContacto.get('tipoReunion')?.value;
      if (tipoReunion == 'online') {
        body = {
          correo,
          empresa,
          fecha,
          hora,
          mensaje,
          tipoReunion,
          urlOnline: this.formularioContacto.get('urlOnline')?.value,
        };
      } else {
        let ubicacion = {
          lat: this.marcadores[0].lat,
          lng: this.marcadores[0].lng,
        };
        body = {
          correo,
          empresa,
          fecha,
          hora,
          mensaje,
          tipoReunion,
          ubicacion,
        };
      }
      this.portafolioService.crearReunion(body).subscribe(
        (resp) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La reunión fue agendada con éxito.',
            showConfirmButton: false,
            timer: 2000,
          });
          this.limpiarFormulario();
          this.bloquearBtn = false;
        },
        (err) => {
          console.warn(err.error.msg);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo siento, la reunión no puedo ser agendada.',
            footer: `<p class="text-center">${err.error.msg}</p>`,
          });
          this.bloquearBtn = false;
        }
      );
    } else {
      //Recorremos el formulario para comprobar que no hay elementos en blanco
      Object.values(this.formularioContacto.controls).forEach((control) => {
        control.markAsTouched();
      });
      console.warn('Formulario no válido');
    }
  }
  limpiarFormulario() {
    this.formularioContacto.reset({
      correo: '',
      empresa: '',
      fecha: '',
      hora: '',
      mensaje: '',
      tipoReunion: 'presencial',
      urlOnline: '',
    });
    //eliminar el primer elemento que es nuestra ubicación
    this.marcadores.shift();

    //Actualizar calendario
    this.cargarFechasOcupado();
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      const monthActual = cellDate.getMonth(); //en JS los meses empiezan en 0;

      // Highlight the 1st and 20th day of each month.
      return this.fechasOcupado[monthActual].includes(date)
        ? 'example-custom-date-class'
        : '';
    }

    return '';
  };
}
