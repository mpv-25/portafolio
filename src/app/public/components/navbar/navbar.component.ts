import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public logo:string = "<matias25pinto />";

  constructor() {}

  ngOnInit(): void {}

  cerrarMenuMovil() {
    if (screen.width <= 800) {
      let menuMovil = document.getElementById('btn-menu-movil');
      menuMovil?.click();
    }
  }
}
