export class Marcador {
  public lat: number;

  public lng: number;

  public titulo = 'Sin título';

  public correo = 'Sin correo';

  public fecha = 'Sin fecha';

  public hora = '00:00';

  constructor(lat: number, lng: number) {
    this.lat = lat;

    this.lng = lng;
  }
}
