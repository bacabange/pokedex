import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { SearchInputComponent } from '../shared/search-input/search-input.component';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';

import Pokemon from '../models/pokemon';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [
		PokeapiService
	]
})
export class HomeComponent implements OnInit {

	private allPokemon: Array<Pokemon> = [];

	constructor(public service: PokeapiService) { }

	ngOnInit() {
		
	}

}
