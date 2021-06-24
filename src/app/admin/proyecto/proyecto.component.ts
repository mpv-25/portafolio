import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto, Skill } from 'src/app/core/shared/models/portafolio.models';
import { ProyectoService } from '../services/proyecto.service';
import { SkillsService } from '../services/skills.service';
import { SwalService } from '../services/swal.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: [
  ]
})
export class ProyectoComponent implements OnInit {

  pathImg: string = '../assets/img/iconos/';
  noImage: string = 'no-image.jpg'
  imgURL: string = '';

  proyectoForm: FormGroup;
  proyectEdicion: any;

  tecnologias: any[] = [];
  skills: Array<Skill> = [];
  proyectos: Array<Proyecto> = [];

  esEditar: boolean = false;
  verForm: boolean = false;

  constructor(private proyectoDao: ProyectoService,
    private skillDao: SkillsService,
    private fb: FormBuilder,
    private swal: SwalService) {
      this.proyectoForm = this.fb.group({
        titulo: ['',[Validators.required]],
        desc: ['',[Validators.required]],
        github: ['',[Validators.required]],
        url: ['',[Validators.required]],
      })
    }

  ngOnInit(): void {

    this.proyectoDao.obtenerProyectos()
      .subscribe(
        proyectos =>{
          this.proyectos = proyectos.proyectos
        },
        error => {
          console.log(error)
          this.swal.swalError('Error al cargas proyectos',error)        
        }
      )

    this.skillDao.obtenerSkills()
      .subscribe(
        skills =>{
          this.skills = skills.skills
        },
        error => {
          console.log(error)
          this.swal.swalError('Error al cargas skills',error)        
        }
      );
  }

  imagenPorDefecto(){
    this.imgURL = `${this.pathImg}${this.noImage}`
  }

  agregarProyecto(){
    if(!this.proyectoForm.valid) return

    this.verficarTecnologias();
    if(this.tecnologias.length == 0) return

    let model = {
      titulo: this.proyectoForm.get('titulo')?.value,
      desc: this.proyectoForm.get('desc')?.value,
      url: this.proyectoForm.get('url')?.value,
      github: this.proyectoForm.get('github')?.value,
      tecnologias: this.tecnologias,
      img:[]
    }

    this.proyectoDao.agregarProyeto(model)
      .subscribe(
        res =>{
          this.swal.swalSucces('Proyecto Agregado')
        },
        error => {
          console.log(error)
          this.swal.swalError('Error al guardar proyecto',error)        
        }
      )
  }

  verProyeto(proyecto: Proyecto){
    this.mostrarForm();
    this.esEditar = true
    this.proyectEdicion = proyecto;
    this.proyectoForm.setValue({
      titulo: proyecto.titulo,
      desc: proyecto.desc,
      url: proyecto.url,
      github: proyecto.github
    })
    
  }

  ngAfterViewInit() {
    this.cargarTecnologias();
  }
  cargarTecnologias(){

    if(!this.esEditar) return

    var lista = document.getElementById("skill-list");
    if(lista != null){
      lista.childNodes.forEach(item=>{
        let checkbox = item.childNodes[0] as HTMLInputElement;
        
        if(checkbox == null) return;

        let checked = this.tecnologias.find(id => id == checkbox.defaultValue)
        
        if (checked){
          checkbox.checked = true;
        } 

      })
    }
  }
  

  verficarTecnologias(){
    var lista = document.getElementById("skill-list");
    if(lista != null){
      lista.childNodes.forEach(item =>{
        let checkbox = item.childNodes[0] as HTMLInputElement;
        
        if(checkbox == null) return;
        
        if(checkbox.checked){
          let index = this.tecnologias.findIndex(id => id == checkbox.defaultValue)
          if (index < 0){
             this.tecnologias.push(checkbox.defaultValue)
          }
        }else{
          let index = this.tecnologias.findIndex(id => id == checkbox.defaultValue)
          if (index >= 0){
             this.tecnologias.splice(index,1)
          }
        }
      });
    }
  }

  mostrarForm(){
    this.verForm = !this.verForm
    this.esEditar = false;
  }

  irAtras(){
    if(this.proyectEdicion) this.proyectEdicion = undefined;
    this.esEditar= false;
    this.verForm = !this.verForm
    this.limpiarForm();
  }

  limpiarForm(){
    this.proyectoForm.reset({
      titulo:'',
      desc:'',
      url:'',
      github:'',
    });
  }

}
