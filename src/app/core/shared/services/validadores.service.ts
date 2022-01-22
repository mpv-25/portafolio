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

  formatoFecha(control: FormControl) {
    try {
      const fechaHoy = new Date();
      const fecha = control.value;
      let dd = fecha.getDate();
      let mm = fecha.getMonth();
      let yyyy = fecha.getFullYear();
      if (
        dd < fechaHoy.getDate() ||
        mm < fechaHoy.getMonth() ||
        yyyy != fechaHoy.getFullYear()
      ) {
        return { noFecha: true };
      }
      return null;
    } catch (err) {
      //retornar true para generar error
      return { noFecha: true };
    }
  }

  fechaValida(control: FormControl) {
    try {
      const fechaOcupado: any[] = JSON.parse(
        localStorage.getItem('fechasOcupado') || '[]'
      );

      const fecha = control.value;
      let dd = fecha.getDate();
      let mm = fecha.getMonth();
      //Verificar si el día esta ocupado
      if (fechaOcupado[mm].includes(dd)) {
        return { noFecha: true };
      }
      return null;
    } catch (err) {
      //retornar true para generar error
      return { noFecha: true };
    }
  }
  urlValido(control: FormControl) {
    try {
      const url = control.value;
      const urlMeet = 'https://meet.google.com';

      if (!url.includes(urlMeet) && url != '') {
        return { noFecha: true };
      }
      return null;
    } catch (err) {
      //retornar true para generar error
      return { noFecha: true };
    }
  }
  urlActivo(control1: string, control2: string) {
    return (formGroup: FormGroup) => {
      const tipoReunion = formGroup.controls[control1];
      const urlOnline = formGroup.controls[control2];
      if (tipoReunion.value == 'presencial') {
        urlOnline.setErrors(null);
      } else {
        if (urlOnline.value.length == 0) {
          urlOnline.setErrors({ urlNoActivo: true });
        }
      }
    };
  }

  validarFechaPresencial(control1: string, control2: string) {
    return (formGroup: FormGroup) => {
      const tipoReunion = formGroup.controls[control1];
      const fecha = formGroup.controls[control2];
      if (fecha.value) {
        const toDay = new Date();
        const fecha1 = `${fecha.value.getFullYear()}-${fecha.value.getMonth()}-${fecha.value.getDate()}`;
        const fecha2 = `${toDay.getFullYear()}-${toDay.getMonth()}-${toDay.getDate()}`;

        if (tipoReunion.value == 'presencial' && fecha1 == fecha2) {
          fecha.setErrors({ fechaNoValida: true });
        }
        if (tipoReunion.value == 'online') {
          fecha.setErrors(null);
        }
      }
    };
  }
}
