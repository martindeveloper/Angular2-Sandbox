/// <reference path="../typings/all.d.ts" />
import "es6-shim";
import "reflect-metadata";
import "zone.js";

import {bootstrap} from 'angular2/angular2';
import {bind, Injector, Binding} from 'angular2/di';
import {httpInjectables} from 'angular2/http';

import {Application} from './Components/Application/Application';
import {HeroesStorage} from './Components/Heroes/Services/HeroesStorage';

bootstrap(Application, [httpInjectables, HeroesStorage]);