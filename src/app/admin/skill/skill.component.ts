import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill, Skills } from 'src/app/core/shared/models/portafolio.models';
import Swal from 'sweetalert2';
import { SkillsService } from '../services/skills.service';
import { SwalService } from '../services/swal.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [
  ]
})
export class SkillComponent implements OnInit {

  public skills: Array<Skill> = [];

  imagen: Array<File> = [];

  verForm: boolean = false;
  imgURL: string = '';

  pathImg: string = '../assets/img/iconos/';
  noImage: string = 'no-image.jpg'
  
  skillForm: FormGroup;
  skillEdicion: any;
  esEdicion: boolean = false;

  constructor(private skillDao: SkillsService,
    private fb: FormBuilder,
    private swal: SwalService) {
      this.skillForm = this.fb.group({
        titulo: ['',[Validators.required, Validators.minLength(2)]]        
      })
     }

  ngOnInit(): void {
    this.skillDao.obtenerSkills()
      .subscribe(skills => {
        this.skills = skills.skills
      },
      error => {
        console.log(error)
        this.swal.swalError('Error al cargas skills',error)        
      });
  }

  mostrarForm(){
    this.verForm = !this.verForm
    this.esEdicion = false;
  }
  
  irAtras(){
    if(this.skillEdicion) this.skillEdicion = undefined;
    this.esEdicion = false;
    this.verForm = !this.verForm
    this.limpiarForm();
  }

  //Form para skill
  //Crear nueva Skill
  guardarOEditarSkill(){
    if(!this.skillForm.valid) return
    if (this.skillForm.get('titulo')?.invalid && (this.skillForm.get('titulo')?.dirty || this.skillForm.get('titulo')?.touched )) return

    let formData = new FormData();

    if(this.imagen.length > 0){
      for (let index = 0; index < this.imagen.length; index++) {
        formData.append(
            'archivo',
            this.imagen[index],
            this.imagen[index].name
          )
      }
    }
    
    if(this.skillEdicion == undefined){
      formData.append('titulo',this.skillForm.get('titulo')?.value)
      this.skillDao.agregarSkill(formData)
        .subscribe(
          res => {
            console.log(res)
            this.irAtras();
            this.swal.swalSucces('Skill creada con exito!')
          },
          error => {
            console.log(error)
            this.swal.swalError('Error al guardar skill',error)
          }
        )
    }else{
      this.skillDao.editarSkill(this.skillEdicion._id, this.skillEdicion)
      .subscribe(
        res => {
          console.log(res)
          this.irAtras();
          this.swal.swalSucces('Skill editar con exito!')

        },
        error => {
          console.log(error)
          this.swal.swalError('Error al guardar skill',error.error)
        }
      )
    }
  }
  //Eliminar Skill
  eliminarSkill(idSkill:string){

    this.swal.swalConfirmModal('Esta seguro de querer borrar esta skill?','No podra revertir este cambio')
      .then(res => {
        if(res.isConfirmed){
          this.skillDao.eliminarSkill(idSkill)
            .subscribe(
              res => {
                console.log(res)
                this.irAtras();
                this.swal.swalSucces('Skill eliminada con exito!')
              },
              error => {
                console.log(error)
                this.swal.swalError('Error al guardar skill',error.error)
              }
            )
        }
      })

    
  }
  //Selecciona la skill para edicion
  verSkill(skill: Skill){
    this.mostrarForm();
    this.esEdicion = true;
    this.skillEdicion = skill;
    this.skillForm.setValue({titulo: skill.titulo})
    this.imgURL = `${this.pathImg}${skill.img}`

    
  }

  //Cargar imagen desde input y muestra preview
  cargarImagen(event:any){
    this.imagen = event.target.files;
    if(this.imagen == null) return
    const reader = new FileReader();
    reader.readAsDataURL(this.imagen[0])
    reader.onload = () =>{
      let image: any = document.getElementById('imgAvatar');
      image.src = reader.result;
    }
  }

  //Si no pudo cargar ninguna imagen redireccion al assest por defecto
  imagenPorDefecto(){
    this.imgURL = `${this.pathImg}${this.noImage}`
  }

  limpiarForm(){
    this.skillForm.reset({titulo:''});
  }
}
