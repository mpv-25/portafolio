import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  }

  imagenPorDefecto(){
    this.imgURL = `${this.pathImg}${this.noImage}`
  }

}
