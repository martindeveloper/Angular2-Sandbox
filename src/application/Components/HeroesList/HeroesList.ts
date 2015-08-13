import {Component, View, NgFor} from 'angular2/angular2';
import {HeroesStorage, HeroesImmutableList} from '../Heroes/Services/HeroesStorage'

@Component({
	selector: "heroes-list"
})
@View({
	templateUrl: "application/Components/HeroesList/View/List.html",
	directives: [NgFor]
})
export class HeroesList {
	public limit = 10;
	private heroes: HeroesImmutableList;

	constructor(storage: HeroesStorage) {
		// TODO: Move this logic into async factory
		if (storage.isFetched == false) {
			storage.fetchFromAPI().then((immutableHeroesMap) => {
				this.heroes = immutableHeroesMap;
			});
		}
		else {
			this.heroes = storage.heroes;
		}
	}
}