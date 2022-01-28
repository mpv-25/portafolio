import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PortafolioService } from './portafolio.service';

@Injectable({
  providedIn: 'root',
})
export class ValidadoresService {
  public fechasOcupado: any[] = [];
  constructor(private portafolioService: PortafolioService) {
    this.portafolioService.getHorasOcupado().subscribe((resp) => {
      this.fechasOcupado = resp;
    });
  }

  validarFormatoFecha(control: FormControl) {
    if (control.value) {
      const fechaHoy = new Date();
      const fecha = control.value;
      let dd = fecha.getDate();
      let mm = fecha.getMonth();
      let yyyy = fecha.getFullYear();
      if (
        (dd < fechaHoy.getDate() && mm == fechaHoy.getMonth()) ||
        mm < fechaHoy.getMonth() ||
        yyyy != fechaHoy.getFullYear()
      ) {
        return { formatoFechaNoValida: true };
      }
    }

    return null;
  }

  validarFechaDisponible(control: FormControl) {
    const fechaOcupado: any[] = JSON.parse(
      localStorage.getItem('fechasOcupado') || '[]'
    );
    if (control.value) {
      const fecha = control.value;
      let dd = fecha.getDate();
      let mm = fecha.getMonth();
      //Verificar si el día esta ocupado
      if (fechaOcupado[mm].includes(dd)) {
        return { fechaDisponibleNoValida: true };
      }
    }

    return null;
  }
  validarUrlMeet(control: FormControl) {
    try {
      const url = control.value;
      const urlMeet = 'https://meet.google.com';

      if (!url.includes(urlMeet) && url != '') {
        return { urlMeetNoValido: true };
      }
      return null;
    } catch (err) {
      //retornar true para generar error
      return { urlMeetNoValido: true };
    }
  }
  validarUrlActivo(control1: string, control2: string) {
    return (formGroup: FormGroup) => {
      const tipoReunion = formGroup.controls[control1];
      const urlOnline = formGroup.controls[control2];
      if (tipoReunion.value == 'presencial') {
        urlOnline.setErrors(null);
      } else {
        if (urlOnline.value.length == 0) {
          urlOnline.setErrors({ urlActivoNoValido: true });
        }
      }
    };
  }

  validarFechaPresencial(control1: string, control2: string) {
    return (formGroup: FormGroup) => {
      const tipoReunion = formGroup.controls[control1];
      const fecha = formGroup.controls[control2];
      if (fecha.dirty) {
        const toDay = new Date();
        const fecha1 = `${fecha.value.getFullYear()}-${fecha.value.getMonth()}-${fecha.value.getDate()}`;
        const fecha2 = `${toDay.getFullYear()}-${toDay.getMonth()}-${toDay.getDate()}`;
        if (fecha1 == fecha2 && tipoReunion.value == 'presencial') {
          fecha.setErrors({ fechaPresencialNoValida: true });
        } else if (fecha1 == fecha2 && tipoReunion.value == 'online') {
          fecha.setErrors(null);
        }
      }
    };
  }
  validarHoraOnline(control1: string, control2: string, control3: string) {
    return (formGroup: FormGroup) => {
      const tipoReunion = formGroup.controls[control1];
      const fecha = formGroup.controls[control2];
      const hora = formGroup.controls[control3];

      if (hora.dirty && fecha.dirty) {
        const toDay = new Date();
        const fecha1 = `${fecha.value.getFullYear()}-${fecha.value.getMonth()}-${fecha.value.getDate()}`;
        const fecha2 = `${toDay.getFullYear()}-${toDay.getMonth()}-${toDay.getDate()}`;
        const horaActual = toDay.getHours() + 4;
        const horaSeleccionada = parseInt(hora.value.slice(0, 2));
        if (fecha1 != fecha2) {
          hora.setErrors(null);
        } else if (
          fecha1 == fecha2 &&
          horaSeleccionada < horaActual &&
          tipoReunion.value == 'online'
        ) {
          hora.setErrors({ horaOnlineNoValida: true });
        } else if (
          fecha1 == fecha2 &&
          horaSeleccionada < horaActual &&
          tipoReunion.value == 'presencial'
        ) {
          hora.setErrors(null);
        }
      }
    };
  }
}
