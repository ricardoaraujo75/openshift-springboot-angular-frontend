import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Task} from './model/task.model';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getTasks(): Observable<[Task]> {
    return this.http.get(`/api/task/`)
      .map(res => res.json());
  }

  updateTask(task: Task): Observable<Task> {
    const options = new RequestOptions();
    const headers = new Headers();
    options.headers = headers;
    options.headers.append('Content-Type', 'application/json');
    return this.http.post(`/api/task/`, JSON.stringify(task), options)
      .map(res => res.json());
  }

  deleteTask(task: Task): Observable<boolean> {
    return this.http.delete(`/api/task/${task.id}`)
      .map(res => res.json());
  }
}
