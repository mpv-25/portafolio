import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
})
export class AcercaDeMiComponent implements OnInit {
  public skills: any[] = [
    { titulo: 'HTML5', img: 'html.svg' },
    { titulo: 'CSS3', img: 'css.svg' },
    { titulo: 'Javascript E6', img: 'js.svg' },
    { titulo: 'Bootstrap', img: 'bootstrap.svg' },
    { titulo: 'Angular +4', img: 'angular.svg' },
    { titulo: 'FireBase', img: 'firebase.svg' },
    { titulo: 'Git & GitHub', img: 'git.svg' },
    { titulo: 'Jquery', img: 'jquery.svg' },
    { titulo: 'MongoDB & Mongoose', img: 'mongo.svg' },
    { titulo: 'Node & Express', img: 'node.svg' },
    { titulo: 'NPM', img: 'npm.svg' },
    { titulo: 'TypeScript', img: 'typescript.svg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
