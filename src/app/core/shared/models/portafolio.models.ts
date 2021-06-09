export interface Usuario {
  email: String;
  password: String;
}

export interface Visitante {
  bloqueado: Boolean;
  correo: String;
  img: String;
  nombre: String;
  visitas: Number;
}

export interface Skill {
  img: String;
  titulo: String;
}

export interface Proyecto {
  desc: String;
  github: String;
  img: Array<String>;
  tecnologias: Array<Skill>;
  titulo: String;
  ulr: String;
}

export interface Reunion {
  correo: String;
  empresa: String;
  fecha: String;
  hora: String;
  mensaje: String;
  tipoReunion: String;
  terminado: Boolean;
  urlOnline: String;
}

export interface Skills {
  skills: Array<Skill>;
}
export interface Proyectos {
  proyectos: Array<Proyecto>;
}
