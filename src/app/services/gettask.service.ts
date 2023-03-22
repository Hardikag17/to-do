import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../utils/dataset';
import { Task } from '../utils/task';

@Injectable({
  providedIn: 'root',
})
export class GettaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
