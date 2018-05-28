import { Component, OnInit } from '@angular/core';

const DOGS = [
  {name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), owner: 'Tom'},
  {name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), owner: 'Jerry'},
  {name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), owner: 'Bill'},
  {name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), owner: 'Titi'},
  {name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), owner: 'Harry'}
];

@Component({
  selector: 'app-dogs-component',
  templateUrl: './dogs-component.component.html',
  styleUrls: ['./dogs-component.component.scss']
})

export class DogsComponentComponent implements OnInit {
    public dogs;

    constructor() {
        this.dogs = DOGS;
    }

    ngOnInit() {
    }

    removeDog(index) {
      this.dogs.splice(index, 1);
    }
}
