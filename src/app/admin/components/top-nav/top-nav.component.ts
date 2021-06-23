import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent implements OnInit {
  constructor(private auth: TokenStorageService,
      private router: Router) {}

  ngOnInit(): void {}
  
  logout(){
    this.auth.logout()
    this.router.navigateByUrl('/login')
  }
}
