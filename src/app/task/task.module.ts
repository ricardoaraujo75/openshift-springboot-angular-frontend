import {Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NewComponent } from './new/new.component';
import { OverviewComponent } from './overview/overview.component';
import {Task} from './model/task.model';
import {FormsModule} from '@angular/forms';
import {TaskService} from './task.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [TaskComponent, NewComponent, OverviewComponent],
  providers: [TaskService],
  exports: [OverviewComponent]
})
export class TaskModule {
}
