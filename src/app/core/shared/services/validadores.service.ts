import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidadoresService {
  constructor() {}

  formatoFecha(control: FormControl) {
    try {
      const fecha = control.value;
      let dd = fecha.getDate();
      let mm = fecha.getMonth();
      let yyyy = fecha.getFullYear();
      if (dd > 31 || mm > 11 || yyyy != 2021) {
        return {noFecha:true};
      }
      return null;
    } catch (err) {
      //retornar true para generar error
      return {noFecha:true};
    }
  }
}
