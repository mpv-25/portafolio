import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills, Proyectos } from '../models/portafolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortafolioService {
  private url = '';

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get<Skills>('http://localhost:3000/api/skill');
  }
  getProyectos() {
    return this.http.get<Proyectos>('http://localhost:3000/api/proyecto');
  }
}
