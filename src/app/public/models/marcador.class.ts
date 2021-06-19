export class Marcador {
  public lat: number;

  public lng: number;

  public fecha = 'Sin fecha';

  public hora = '00:00';

  constructor(lat: number, lng: number, fecha: string, hora: string) {
    this.lat = lat;

    this.lng = lng;

    this.fecha = fecha;

    this.hora = hora;
  }
}
