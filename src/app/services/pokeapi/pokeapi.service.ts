import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import Pokemon from '../../models/pokemon';
import Move from '../../models/move';

@Injectable()
export class PokeapiService {

	public url:string;

	constructor() {
		this.url = 'http://pokeapi.co/';
	}


	getAllPokemons() {
		let url = this.url + 'api/v1/pokedex/1/';
	}

}
