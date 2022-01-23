import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pockemon} from "../../shared/pockemon.model";
import {PockedexService} from "../../pages/pockedex.service";
import {pockemons} from "../../shared/pokemons-mock";

@Component({
  selector: 'app-pockemon-list',
  templateUrl: './pockemon-list.component.html',
  styleUrls: ['./pockemon-list.component.css']
})
export class PockemonListComponent implements OnInit {

  @Input() pockemons:Pockemon[]=[];
  @Output()
  public pokemonClick: EventEmitter<Pockemon> = new EventEmitter<Pockemon>();
  constructor(private pokedexService:PockedexService) {

  }
  ngOnInit(): void {
  this.getPokemons();
  }
  pokemonList($event:Pockemon){
      this.pokemonClick.emit($event);
  }
  getPokemons (){
    this.pockemons=this.pokedexService.getPokemons();
  }
}
