import { Component, OnInit } from '@angular/core';
import {PockedexService} from "../../pages/pockedex.service";
import {Pockemon} from "../../shared/pockemon.model";

@Component({
  selector: 'app-pockedex-page',
  templateUrl: './pockedex-page.component.html',
  styleUrls: ['./pockedex-page.component.css']
})
export class PockedexPageComponent implements OnInit {
  public pockemons: Pockemon[]=[];
  public pokemonDetail:Pockemon | undefined ;
  private service:PockedexService;
  constructor(private pokemonService:PockedexService) { this.service=pokemonService }

  ngOnInit(): void {
    this.pockemons = this.service.getPokemons();
  }

  clickPokemonDetail($event: Pockemon) {
    this.pokemonDetail=$event;
  }
}
