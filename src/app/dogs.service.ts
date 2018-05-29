import { Injectable } from '@angular/core';
import Dog  from './dog';

const DOGS = [
  {name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), owner: 'Tom'},
  {name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), owner: 'Jerry'},
  {name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), owner: 'Bill'},
  {name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), owner: 'Titi'},
  {name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), owner: 'Harry'}
];

@Injectable()
export class DogsService {

    constructor() { }

    getDogs(): Array<any> {
      return DOGS;
    }

    addDog(dog) {
      DOGS.push(dog);
    }

}
