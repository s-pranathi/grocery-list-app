import { Component } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent {
  task!: string;
  tasks:any = [];

  onClick(){
    const newTask:any = {name: this.task, strike: false}
    
  	this.tasks.push(newTask);
  	this.task = '';
  }
  
  

  
}


