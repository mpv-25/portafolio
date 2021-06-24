import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/shared/models/portafolio.models';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi: string = `${environment.apiPortafolio}/api/`;
  // protected api:string = "http://18.117.197.8:3000/api/"

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any>{
    return this.http.post(`${this.urlApi}usuario/login`,usuario)  
  }
}
