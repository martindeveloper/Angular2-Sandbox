import {Http} from 'angular2/http';
import {Injectable, bind} from 'angular2/di';
import * as Immutable from 'immutable';

// Custom types
export type HeroesImmutableList = Immutable.Map<number, any>;

// API endpoint
const API_ENDPOINT = "http://localhost/angular2_sandbox/src/data.json";

@Injectable()
export class HeroesStorage
{
	private _heroes = [];
	public isFetched = false;

	constructor(private httpService: Http)
	{
	}

	get heroes() : HeroesImmutableList
	{
		return Immutable.fromJS(this._heroes);
	}

	fetchFromAPI() : Promise<HeroesImmutableList>
	{
		return new Promise((resolve) => {
			this.httpService.get(API_ENDPOINT)
			      .toRx()
			      .map(res => res.json())
			      .subscribe((heroes) => {
					  this._heroes = heroes;
					  this.isFetched = true;

					  resolve(this.heroes);
				   });
		});
	}
}

// Injectables
export const heroesStorageInjectables = [
	bind(HeroesStorage).toFactory((http : Http) => {
		return new HeroesStorage(http);
	}, [Http])
];