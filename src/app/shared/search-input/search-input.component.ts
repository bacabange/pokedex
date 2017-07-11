import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi/pokeapi.service';

@Component({
	selector: 'search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.css'],
	providers: [
		PokeapiService
	]
})
export class SearchInputComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
