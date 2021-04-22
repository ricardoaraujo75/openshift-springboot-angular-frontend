import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  tasks: [Task];

  constructor(private taskService: TaskService) { }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  refresh(success: boolean) {
    if (success) {
      this.getTasks();
    }
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: [Task]) => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
    this.getTasks();
  }
}
