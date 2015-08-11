import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Http, httpInjectables} from 'angular2/http';

const API_ENDPOINT = "http://localhost/angular2_sandbox/src/data.json";

@Component({
	selector: "heroes-list",
  	viewBindings: [httpInjectables]
})
@View({
	templateUrl: "application/Components/HeroesList/View/List.html",
	directives: [NgFor]
})
export class HeroesList
{
	public limit = 10;
	private heroes = [];
  
	constructor(http: Http)
	{
		http.get(API_ENDPOINT)
	      .toRx()
	      .map(res => res.json())
	      .subscribe(heroes => this.heroes = heroes);
	}
}