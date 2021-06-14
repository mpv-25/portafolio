import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.subirInicio();
  }

  // Funcion para subir al inicio
  subirInicio(): void {
    window.scroll(0, 0);
  }
}
