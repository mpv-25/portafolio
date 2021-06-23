import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/shared/models/portafolio.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  protected api:string = "http://18.117.197.8:3000/api/"

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any>{
    return this.http.post(`${this.api}usuario/login`,usuario)  
  }
}
