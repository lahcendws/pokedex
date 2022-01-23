import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pockemon} from "../../shared/pockemon.model";
import {PockedexService} from "../pockedex.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-pockemon-page',
  templateUrl: './create-pockemon-page.component.html',
  styleUrls: ['./create-pockemon-page.component.css']
})
export class CreatePockemonPageComponent implements OnInit {
      public  pokemonForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private pokemonService:PockedexService) {}

  ngOnInit(): void {
    this.pokemonForm=this.fb.group({
      name: ["", Validators.required],
      imageUrl: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

     public addPokemons() {
        this.pokemonService.addPokemon(this.pokemonForm.value);
      }

  onSubmit() {

  }
}
