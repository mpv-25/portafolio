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
  public proyecto: Proyecto = {
    desc: '',
    github: '',
    img: [],
    tecnologias: [],
    titulo: '',
    url: '',
  };
  public pagina = 1;
  public paginas: any[] = [];
  constructor(
    private portafolioService: PortafolioService,
    private router: Router
  ) {
    this.cargarProyectos(0);
  }

  ngOnInit(): void {}

  mostrarProyecto(proyecto: Proyecto) {
    this.proyecto = proyecto;
  }

  cargarProyectos(desde: number) {
    this.proyectos = [];
    this.portafolioService.getProyectos(desde).subscribe(
      (data) => {
        this.proyectos = data.proyectos;
        this.pagina = data.pagina;
	this.paginas = [];
        for (let i = 0; i < data.totalPaginas; i++) {
          let pagina = i + 1;
          let desde = i * 6;
          let objeto = { desde, pagina };
          this.paginas.push(objeto);
        }
      },
      (err) => {
        console.warn(err);
      }
    );
  }
}
