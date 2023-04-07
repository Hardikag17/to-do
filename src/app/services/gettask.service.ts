import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../utils/task';

@Injectable({
  providedIn: 'root',
})
export class GettaskService {
  API_ROOT = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_ROOT}/tasks`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.API_ROOT}/tasks`, task);
  }

  updateTask(task: Task): Observable<Task> {
    console.log(task);
    return this.http.put<Task>(`${this.API_ROOT}/tasks/${task.id}`, task);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.API_ROOT}/tasks/${task.id}`);
  }
}
