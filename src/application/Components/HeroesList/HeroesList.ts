import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Http, httpInjectables} from 'angular2/http';
import * as Immutable from 'immutable';

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
	private heroes : Immutable.Map<number, any>;
  
	constructor(http: Http)
	{
		http.get(API_ENDPOINT)
	      .toRx()
	      .map(res => res.json())
	      .subscribe(heroes => {
			  let immutableStruct = Immutable.fromJS(heroes);
			  this.heroes = immutableStruct;
			  
			  console.log(this.heroes);
		  });
	}
}