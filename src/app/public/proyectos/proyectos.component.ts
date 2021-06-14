import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/core/shared/services/portafolio.service';
import { Proyecto } from 'src/app/core/shared/models/portafolio.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
})
export class ProyectosComponent implements OnInit {
  public proyectos: Array<Proyecto> = [];
  constructor(
    private portafolioService: PortafolioService,
    private router: Router
  ) {
    this.portafolioService.getProyectos().subscribe(
      (data) => {
        console.log(data.proyectos);
        this.proyectos = data.proyectos;
      },
      (err) => {
        console.warn(err);
      }
    );
  }

  ngOnInit(): void {}
}
