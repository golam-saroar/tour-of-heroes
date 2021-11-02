import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Saroar' },
      { id: 12, name: 'Renato' },
      { id: 13, name: 'Riyad' },
      { id: 14, name: 'Augusto' },
      { id: 15, name: 'Rodrigo' },
      { id: 16, name: 'Helton' },
      { id: 17, name: 'Delwar' },
      { id: 18, name: 'Imranur' },
      { id: 19, name: 'Ferdous' },
      { id: 20, name: 'Emtiaj' }
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