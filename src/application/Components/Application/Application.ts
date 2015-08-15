import {Component, View} from 'angular2/angular2';

import {HeroesList} from '../HeroesList/HeroesList'

@Component({
  selector: 'application'
})
@View({
  templateUrl: 'application/Components/Application/View/Application.html',
  directives: [HeroesList]
})
export class Application {
}
