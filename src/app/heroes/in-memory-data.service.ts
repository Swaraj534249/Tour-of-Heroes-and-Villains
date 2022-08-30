import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 12, name: 'IronMan' },
      { id: 13, name: 'SpiderMan' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'SuperMan' },
      { id: 16, name: 'BatMan' },
      { id: 17, name: 'Black Panther' },
      { id: 18, name: 'Captain America' },
      { id: 19, name: 'Doctor Strange' },
      { id: 20, name: 'Flash' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
