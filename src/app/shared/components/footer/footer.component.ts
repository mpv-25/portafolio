import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public logo:string = '{ MPV-WEB }';
  public fecha:Date = new Date();
  public year:number = 0;

  constructor() { 
    this.year = this.fecha.getFullYear()
  }

  ngOnInit(): void {
  }

}
