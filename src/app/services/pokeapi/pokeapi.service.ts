import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import Pokemon from '../../models/pokemon';
import Move from '../../models/move';

@Injectable()
export class PokeapiService {

	public url:string;

	constructor(private _http: Http) {
		this.url = 'http://pokeapi.co/';
	}


	getPokemons(): Promise<Pokemon[]> {
		let url = this.url + 'api/v1/pokedex/1/';

		return this._http.get(url)
             .toPromise()
             .then(response => response.json().data as Pokemon[])
             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
