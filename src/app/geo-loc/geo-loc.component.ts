import { Component, OnInit } from '@angular/core';
import { GeoLocService } from '../services/geo-loc.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-geo-loc',
  templateUrl: './geo-loc.component.html',
  styleUrls: ['./geo-loc.component.sass']
})
export class GeoLocComponent implements OnInit {

  FATEC_LATITUDE = -20.5144785;
  FATEC_LONGITUDE = -47.4003616;

  constructor(private geoLocSrv: GeoLocService, private globals: Globals) { }
  public pos: any;
  public dist: number;
  public msgErro: string;

  async ngOnInit() {
    try {
      this.pos = await this.geoLocSrv.obterPos();
      this.dist = this.geoLocSrv.distancia(this.pos.coords.latitude, this.pos.coords.longitude, this.FATEC_LATITUDE, this.FATEC_LONGITUDE);

      this.globals.estaNaFatec = this.dist <= 0.075; // Se for menor, está na fatec
      
    } catch (e) {
      console.error(e);
      this.msgErro = 'Você precisa permitir a obtenção da sua localização';
    }
  }

}
