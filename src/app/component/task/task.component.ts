import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/utils/task';
import { GettaskService } from 'src/app/services/gettask.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tasks: Task[] = [];

  constructor(private gettaskService: GettaskService) {}
  ngOnInit(): void {
    this.gettaskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  AddTask = () => {
    console.log('ckic');
  };
}
