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

  agregarSkill(skill: Skill){

    let header = new HttpHeaders()
    header.append('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjYwYmQzODMwNzE5YTk5MTVjYzcwODEzZCIsIm5vbWJyZSI6ImVsZWN0aXZhMyIsImVtYWlsIjoiZWxlY3RpdmEzQGVsZWN0aXZhMy5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRQbGNlRW9pMEQxYXY1QWhsZ2x0NVNPSjdReTJvSWoweUthc0YwV2UuWEJxZEZFbmR5VlhlMiIsIl9fdiI6MH0sImlhdCI6MTYyNDA2ODU0NiwiZXhwIjoxNjI0MDcyMTQ2fQ.zUCyrT0iBad-TPHqW70gyzSC4SqGZkQyqs5BiVnSTj0');
    return this.http.post(`${this.api}skill`,skill,{
      headers: header
    })
  }
}
