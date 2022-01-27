import { Component, OnInit } from '@angular/core';
import { ToDos } from '../to-dos';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  dos: ToDos[] = [

    new ToDos(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020, 3, 14)),
    new ToDos(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019, 6, 9)),
    new ToDos(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2022, 1, 12)),
    new ToDos(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2019, 0, 18)),
    new ToDos(5, 'Solve math homework', 'Damn Math', new Date(2019, 2, 14)),
    new ToDos(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2030, 3, 14)),
  ]

  showingDetails(i: any ){
    this.dos[i].showDescription =!this.dos[i].showDescription;
  }

  completeGoal(isComplete: boolean, i: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.dos[i].name}?`)
    
    if (toDelete){
      this.dos.splice(i,1)
    }
  }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
