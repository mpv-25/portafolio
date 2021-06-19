import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill, Skills } from 'src/app/core/shared/models/portafolio.models';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [
  ]
})
export class SkillComponent implements OnInit {

  public skills: Array<Skill> = [];

  verForm: boolean = false;
  imgURL: string = '';

  skillForm: FormGroup;

  constructor(private skillDao: SkillsService,
    private fb: FormBuilder) {
      this.skillForm = this.fb.group({
        img: [null],
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
      });
  }

  mostrarForm(){
    this.verForm = !this.verForm
  }
  
  cancelar(){
    this.verForm = !this.verForm
  }

  nuevaSkill(){
    if (this.skillForm.get('titulo')?.invalid && (this.skillForm.get('titulo')?.dirty || this.skillForm.get('titulo')?.touched )) return

    let model: Skill = {
      titulo: this.skillForm.get('titulo')?.value,
      img: this.skillForm.get('img')?.value
    }

    this.skillDao.agregarSkill(model)
      .subscribe(res => console.log(res),
        error => console.log(error))
  }

  verSkill(skill: Skill){
    console.log(skill)
  }

  mostraImagen(event:any){
    const file = (event.target as HTMLInputElement).files![0]; 
    
    if(file == null) return

    this.skillForm.patchValue({
      img: file
    })

    this.skillForm.get('img')?.updateValueAndValidity();
    
    const reader = new FileReader();
    reader.onload = () =>{
      this.imgURL = reader.result as string;
    }
    reader.readAsDataURL(file);
  }



}
