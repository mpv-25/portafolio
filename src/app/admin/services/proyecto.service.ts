import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from 'src/app/core/shared/models/portafolio.models';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private api: string = `${environment.apiPortafolio}/api/`;

  constructor(private http: HttpClient) { }

  obtenerProyectos(){
    return this.http.get<Proyectos>(`${this.api}proyecto`)    
  }

  agregarProyeto(proyecto:any){
    return this.http.post(`${this.api}proyecto`,proyecto)    
  }

  editarProyecto(proyecto: any){
    return this.http.put(`${this.api}proyecto/${proyecto._id}`,proyecto)    
  }

  eliminarProyecto(id: string){
    return this.http.delete<Proyectos>(`${this.api}proyecto/${id}`)    
  }

}
