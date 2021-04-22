import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../model/task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private _task: Task;

  @Output()
  private refreshEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  removeTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((success) => {
      if (success) {
        this.refreshEvent.emit(true);
      }
    });
  }

  ngOnInit() {
  }

  updateTask() {
    if (!this.task.done){
      this.task.done = true;
    } else {
      this.task.done = !this.task.done;
    }
    this.taskService.updateTask(this.task).subscribe((task) => {
      this.task = task;
    });
  }

  @Input()
  set task(task: Task) {
    this._task = task;
  }

  get task(): Task {
    return this._task;
  }

}
