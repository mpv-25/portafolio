import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Skill } from 'src/app/core/shared/models/portafolio.models';
import { PortafolioService } from 'src/app/core/shared/services/portafolio.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup;
  public uploadedFiles: Array<File> = [];
  public nombreImg: string = '../assets/img/iconos/no-image.jpg';
  constructor(
    private fb: FormBuilder,
    private portafolioService: PortafolioService
  ) {
    this.formulario = this.fb.group({
      archivo: ['', Validators.required],
      titulo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.formulario.valid) {
      let formData = new FormData();
      for (let i = 0; i < this.uploadedFiles.length; i++) {
        formData.append(
          'archivo',
          this.uploadedFiles[i],
          this.uploadedFiles[i].name
        );
      }
      formData.append('titulo', this.formulario.get('titulo')?.value);
      this.portafolioService.crearSkills(formData).subscribe(
        (resp) => {
          console.log(resp);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo la Skill con Exito!!!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.limpiarFormulario();
        },
        (err) => {
          console.warn(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No es posible guardar la Skill',
            footer: '<p>{{err.msg}}</p>',
          });
        }
      );
    } else {
      console.warn('ERROR!!! archivo vacio');
    }
  }
  limpiarFormulario() {
    this.formulario.reset({
      archivo: '',
      titulo: '',
    });
    let image: any = document.getElementById('img-preview');

    image.src = this.nombreImg;
  }

  //obtener el archivo file
  onFileChange(e: any) {
    this.uploadedFiles = e.target.files;
    console.log(e.target);
    this.cambiarImg(e.target.files[0]);
  }

  cambiarImg(imagen: any) {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();

    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(imagen);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function () {
      let image: any = document.getElementById('img-preview');

      image.src = reader.result;
    };
  }
}
