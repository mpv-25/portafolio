import { Injectable } from '@angular/core';

const TOKEN_KEY:string = 'token'

@Injectable({
  providedIn: 'root'
})


export class TokenStorageService {


  constructor() { }

  logout(){
    window.sessionStorage.clear()
  }

  public guardarToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token)
  }

  public obtenerToken() : string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }
}
