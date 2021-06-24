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

  swalConfirmModal(titulo:string,texto:string){
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText:'Cancelar'
      
    });
  }
}
