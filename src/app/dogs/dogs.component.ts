import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import Dog  from '../dog';


// const DOGS = [
//   {name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), owner: 'Tom'},
//   {name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), owner: 'Jerry'},
//   {name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), owner: 'Bill'},
//   {name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), owner: 'Titi'},
//   {name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), owner: 'Harry'}
// ];

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {
    
    public dog: Dog = new Dog();
    public dogs = [];
	dateFormat = 'fullDate';

    constructor(private dogService: DogsService) {
        this.dogs = dogService.getDogs();  
    }


    ngOnInit() {
    }

    removeDog(index) {
      this.dogs.splice(index, 1);
    }
	
	toggleDate() {
		this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
	}
}