import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario-dto';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  public imgPrueba: string = 'https://rebot.me/assets/images/mini-avatars/379095.jpg?r=1467928034';

  usuarioForm:any ;
  
  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido:['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      telefono: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {}

  guardarCambios(){
    console.log(this.usuarioForm.value.nombre);
  }
} 
