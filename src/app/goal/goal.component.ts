import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'Watch Finding Nemo; ','Find an online version and watch merlin find his son. ', new Date(2020,3,14)),
    new Goal(2,'Buy cookies; ','i have to buy cookies for the parrot. ', new Date(2022,4,10)),
    new Goal(3,'get new phone case; ','Diana has her birthday coming up soon. ', new Date(2022,5,20)),
    new Goal(4,'Get dog food; ','Pupper likes expensive snacks. ', new Date(2022,6,10)),
    new Goal(5, 'Plot my world dominationplan; ','Cause i want to cure the corona virus. ', new Date(2022,7,28)),
    
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }


  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

    deleteGoal(isComplete, index){
      if (isComplete){
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
        
        if (toDelete){
          this.goals.splice(index, 1)
        }
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
