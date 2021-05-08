import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  public imgPrueba: string =
    'https://rebot.me/assets/images/mini-avatars/379095.jpg?r=1467928034';

  constructor() {}

  ngOnInit(): void {}
}
