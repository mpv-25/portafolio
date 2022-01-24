export class Marcador {
  public lat: number;

  public lng: number;

  public fecha = 'Sin fecha';

  public hora = '00:00';

  public empresa = '';

  constructor(lat: number, lng: number, fecha: string, hora: string, empresa:string) {
    this.lat = lat;

    this.lng = lng;

    this.fecha = fecha;

    this.hora = hora;
    
    this.empresa = empresa;
  }
}
