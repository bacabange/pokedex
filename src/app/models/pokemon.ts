import { get, sortBy } from 'lodash';

export default class Pokemon {

    entry_number: number;
    pokemon_species: Object;

    /*name: String
    uri: String
    moves: Array<Object>
    egg_groups: Array<Object>
    abilities: Array<Object>
    image: String
    stats: Object
    evolutions: Array<Object>

    constructor(json: Object) {
        this.name = get(json, 'name', 'Unknown');
        this.uri = get(json, 'resource_uri', 'Unknown')
        this.moves = sortBy(get(json, 'moves', 'Unknown'), 'name');
        this.egg_groups = get(json, 'egg_groups', 'None');
        this.abilities = get(json, 'abilities', 'Unknown');
        this.evolutions = sortBy(get(json, 'evolutions', 'None'), 'name');
        this.stats = {
            attack: get(json, 'attack', 'Unknown'),
            defense: get(json, 'defense', 'Unknown'),
            hp: get(json, 'hp', 'Unknown'),
            speed: get(json, 'speed', 'Unknown'),
            sp_atk: get(json, 'sp_atk', 'Unknown'),
            sp_def: get(json, 'sp_def', 'Unknown'),
            weight: parseInt(get(json, 'weight', '0'), 10)
        }
    }*/
}