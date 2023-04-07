import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/utils/task';
import { GettaskService } from 'src/app/services/gettask.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter();
  public toggleButton: boolean = false;
  description!: string;
  newtext!: string;
  newdescription!: string;

  constructor() {}

  enable() {
    this.toggleButton = false;
  }

  OnUpdate(task: Task) {
    this.onUpdateTask.emit({
      text: this.newtext,
      day: '',
      description: this.newdescription,
      id: task.id,
    });
  }

  OnDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
