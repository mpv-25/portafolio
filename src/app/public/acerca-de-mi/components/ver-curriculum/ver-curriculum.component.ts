import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-ver-curriculum',
  templateUrl: './ver-curriculum.component.html',
})
export class VerCurriculumComponent implements OnInit {
  loginForm: FormGroup;
  socialUser: any = {};
  isLoggedin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.socialAuthService.authState.subscribe(
      (user) => {
        this.socialUser = user;
        this.isLoggedin = true;
        localStorage.setItem('usuario', JSON.stringify(this.socialUser));
        this.router.navigate(['curriculum']);
        console.log('Ingreso al curriculum');
      },
      (err) => {
        console.warn('ERROR!!!');
      }
    );
  }

  ngOnInit() {}

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithFacebook(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .catch((err) => {
        console.warn('ERROR!!!');
      });
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
