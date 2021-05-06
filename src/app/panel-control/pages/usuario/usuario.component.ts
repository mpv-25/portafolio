import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  imgPrueba: string = 'https://rebot.me/assets/images/mini-avatars/379095.jpg?r=1467928034';

  constructor() { }

  ngOnInit(): void {
  }

}
