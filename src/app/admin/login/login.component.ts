import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/shared/models/portafolio.models';
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
      private tokenStorage: TokenStorageService,
      private fb: FormBuilder,
      private router: Router) {
      this.loginForm = this.fb.group({
        email: ['',[Validators.required]],
        password: ['',[Validators.required]]
      })

   }


  loginForm: FormGroup;

  ngOnInit(): void {
  }

  iniciarSesion(){
    let usuario: Usuario = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.loginService.login(usuario)
      .subscribe(
        data => {
          this.tokenStorage.guardarToken(data.token)
          this.router.navigateByUrl('/admin/skill');
        },
        error => {
          console.log(error)
        }
      )
  }

}
