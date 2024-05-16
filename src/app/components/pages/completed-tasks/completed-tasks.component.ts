import { Component } from '@angular/core';
import { HttpService } from '../../../service/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.scss'
})
export class CompletedTasksComponent {
  constructor(private httpService : HttpService){}
  newTask="";
  taskList : any[] = [];
  
  ngOnInit(){
    this.getAllTasks();
  }

  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList = result.filter((x : any) => x.isImportant == true);
      
    })
  }

  onComplete(task :any){
      task.isCompleted = true;
      this.httpService.updateTask(task).subscribe(()=>{
        this.getAllTasks();
      })
  }

  onImportant(task:any){
      task.isImportant =true;
      this.httpService.updateTask(task).subscribe(()=>{
        this.getAllTasks();
      })
  }

}
