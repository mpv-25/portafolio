import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from 'src/app/core/shared/models/portafolio.models';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  protected api:string = "http://18.117.197.8:3000/api/"

  constructor(private http: HttpClient) { }

  obtenerSkills(){
    return this.http.get<Skills>(`${this.api}skill`)    
  }

}
