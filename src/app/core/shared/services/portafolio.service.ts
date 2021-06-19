import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Skills,
  Proyectos,
  Reunion,
  Visitante,
  loginVisitante,
} from '../models/portafolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortafolioService {
  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get<Skills>(`${environment.apiPortafolio}/api/skill`);
  }
  getProyectos() {
    return this.http.get<Proyectos>(
      `${environment.apiPortafolio}/api/proyecto`
    );
  }

  crearReunion(body: Reunion) {
    return this.http.post<Reunion>(
      `${environment.apiPortafolio}/api/reunion`,
      body,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  loginVisitante(body: Visitante) {
    return this.http.post<loginVisitante>(
      `${environment.apiPortafolio}/api/visitante`,
      body,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
