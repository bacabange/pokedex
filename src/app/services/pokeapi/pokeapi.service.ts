import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import Pokemon from '../../models/pokemon';
import Move from '../../models/move';

@Injectable()
export class PokeapiService {

	public url:string;

	constructor(private _http: Http) {
		this.url = 'http://pokeapi.co/';
	}

	getPokemons(){
		let url = this.url + 'api/v2/pokedex/1';
		return this._http.get(url);
	}

}
