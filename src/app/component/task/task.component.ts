import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/utils/task';
import { GettaskService } from 'src/app/services/gettask.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tasks: Task[] = [];
  day = new Date();
  text: string = '';
  description: string = '';
  id = 0;
  jstoday = '';

  constructor(private gettaskService: GettaskService) {
    this.jstoday = formatDate(
      this.day,
      'dd-MM-yyyy hh:mm:ss a',
      'en-US',
      '+0530'
    );
  }
  ngOnInit(): void {
    this.gettaskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onAddTask = () => {
    const task = {
      text: this.text,
      day: this.jstoday,
      description: this.description,
      id: this.tasks.length + 1,
    };

    this.gettaskService
      .addTask(task)
      .subscribe((task) => this.tasks.push(task));
  };

  onDeleteTask = (task: Task) => {
    console.log(task);
    this.gettaskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  };

  onUpdateTask = (newtask: Task) => {
    newtask.day = this.jstoday;
    this.gettaskService.updateTask(newtask).subscribe({
      next: (data) => {
        newtask.id = data.id;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  };
}
