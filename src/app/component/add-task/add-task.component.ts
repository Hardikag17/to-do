import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../utils/task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id!: Number;
  text!: string;
  description!: string;
  day!: string;

  onSubmit = () => {
    const newTask = {
      id: this.id,
      text: this.text,
      day: this.day,
      description: this.description,
    };

    this.onAddTask.emit(newTask);
    console.log(newTask);
  };
}
