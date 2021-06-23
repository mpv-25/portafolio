import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  swalSucces(msg: string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  swalError(msg: string, err?:any){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: msg,
      footer: `<p>${err.msg ? err.msg : 'Error Desconocido' }</p>`,
    });
  }
}
