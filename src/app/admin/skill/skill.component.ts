import { Component, OnInit } from '@angular/core';
import { Skill, Skills } from 'src/app/core/shared/models/portafolio.models';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [
  ]
})
export class SkillComponent implements OnInit {

  public skill: Skill | undefined;

  public skills: any = [];


  verForm: boolean = false;

  constructor(private skillDao: SkillsService) { }

  ngOnInit(): void {
    this.skillDao.obtenerSkills()
      .subscribe(skills => this.skills = skills)
  }

  mostrarForm(){
    this.verForm = !this.verForm
  }
  
  cancelar(){
    this.verForm = !this.verForm
  }

}
