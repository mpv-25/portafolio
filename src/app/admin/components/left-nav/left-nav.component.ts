import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
})
export class LeftNavComponent implements OnInit {
  public logo: string = '{ MPV-WEB }';
  constructor() {}

  ngOnInit(): void {}
}
