import { Injectable } from '@angular/core';
import {Pockemon} from "../shared/pockemon.model";
import {pockemons} from "../shared/pokemons-mock";


@Injectable({
  providedIn: 'root'
})
export class PockedexService {
  public pockemons: Pockemon[] = pockemons;

  constructor() {

  }
  public getPokemons(): Pockemon[] {
    return pockemons;
  }

  public addPokemon(pockemon: Pockemon) {
        this.pockemons.push(pockemon);
        console.log(pockemons);
  }
}
