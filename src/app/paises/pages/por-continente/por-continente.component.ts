import { Component, inject } from '@angular/core';
import { Continente } from '../../enums/continente.enum';
import { SmallCountry } from '../../models/paises.models';
import { PaisesService } from '../../services/paises.service';

@Component({
  templateUrl: './por-continente.component.html',
  styleUrls: ['./por-continente.component.css']
})
export class PorContinenteComponent {
  paisesService: PaisesService = inject(PaisesService);

  botonesContinente: string[] = Object.keys(Continente);
  continenteSeleccionado: string = '';
  paises: SmallCountry[] = [];

  changeContinenteSeleccionado(continente: string) {
    if (this.continenteSeleccionado == continente) {
      this.continenteSeleccionado = '';
      this.clearPaises();
      return;
    }

    this.continenteSeleccionado = continente;
    // Solicitar datos a restCountries
    this.requestCountries()
  }
  
  clearPaises() {
    this.paises = [];
  }

  requestCountries() {
    
    this.paisesService
    .getCountriesByRegion(this.continenteSeleccionado)
    .subscribe(
      (countries) => {
        console.log(countries);
        
        this.paises = countries;
    });
  }
}
