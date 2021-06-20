import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Skills,
  Skill,
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
  //Prueba cargar skills
  crearSkills(body: any) {
    return this.http.post(`${environment.apiPortafolio}/api/skill`, body, {
      headers: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjYwYmJjMjkzYzVjOTQyMWIxY2E2YmY2MSIsImVtYWlsIjoibWF0aWFzMjVwaW50b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRFM2ZHNGxyRnBQQ3NQRHN1c0hLQnN1bmtBMlVSWjF6Lzgxd0h2U2pPN0Y1VGJpTXNUUzJuLiIsIl9fdiI6MH0sImlhdCI6MTYyNDIxMTQwOCwiZXhwIjoxNjI0MjE1MDA4fQ.abR7vYlGZVQzB46V38zmCMIww9JgrpGaja7DFp9Ic0s',
      },
    });
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
