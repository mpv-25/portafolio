import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marcador } from '../models/marcador.class';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent implements OnInit {
  public formularioContacto: FormGroup;
  public lat = -25.3030525;
  public lng = -57.5941849;
  public marcadores: any[] = [];

  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      empresa: ['', [Validators.required, Validators.minLength(3)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      tipoReunion: ['presencial', [Validators.required]],
      urlOnline: [''],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

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
    if (this.validEmpresa && this.validCorreo && this.validFecha) {
      const coords: { lat: number; lng: number } = event.coords;
      const nuevoMarcador = new Marcador(coords.lat, coords.lng);
      nuevoMarcador.titulo =
        this.formularioContacto.get('empresa')?.value || '';
      nuevoMarcador.correo = this.formularioContacto.get('correo')?.value || '';
      nuevoMarcador.fecha = this.formularioContacto.get('fecha')?.value || '';
      nuevoMarcador.hora = this.formularioContacto.get('hora')?.value || '';

      this.marcadores[0] = nuevoMarcador;
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
      console.log('Formulario Válido');
      console.log(this.formularioContacto.value);
    } else {
      //Recorremos el formulario para comprobar que no hay elementos en blanco
      Object.values(this.formularioContacto.controls).forEach((control) => {
        control.markAsTouched();
      });
      console.warn('Formulario no válido');
    }
  }
}
