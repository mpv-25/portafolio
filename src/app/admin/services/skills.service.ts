import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill, Skills } from 'src/app/core/shared/models/portafolio.models';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  protected api:string = "http://18.117.197.8:3000/api/"
  constructor(private http: HttpClient) { }

  obtenerSkills(){
    return this.http.get<Skills>(`${this.api}skill`)    
  }

  agregarSkill(skill: any){
    return this.http.post(`${this.api}skill`,skill)
  }

  editarSkill(idSkill:string,skill:any){
    return this.http.put(`${this.api}skill/${idSkill}`,skill)
  }

  eliminarSkill(idSkill:string){
    return this.http.delete(`${this.api}skill/${idSkill}`)
  }
}
