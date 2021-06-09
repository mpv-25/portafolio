import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/shared/models/portafolio.models';
import { PortafolioService } from 'src/app/core/shared/services/portafolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
})
export class AcercaDeMiComponent implements OnInit {
  public skills: Array<Skill> = [];
  constructor(private portafolioService: PortafolioService) {
    this.portafolioService.getSkills().subscribe(
      (data) => {
        this.skills = data.skills;
      },
      (err) => {
        console.warn(err);
      }
    );
  }

  ngOnInit(): void {}
}
