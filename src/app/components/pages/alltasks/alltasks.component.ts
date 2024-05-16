import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../service/state.service';

@Component({
  selector: 'app-alltasks',
  standalone: true,
  imports: [FormsModule,PageTitleComponent,TaskListComponent],
  templateUrl: './alltasks.component.html',
  styleUrl: './alltasks.component.scss'
})
export class AlltasksComponent {
    constructor(private httpService : HttpService){}
    newTask="";
    statesService = inject(StateService);
    initialtaskList : any[] = [];
    taskList : any[] = [];
    
    ngOnInit(){
      this.getAllTasks();
      this.statesService.searchSubject.subscribe((value)=>{
        if(value){
          this.taskList = this.initialtaskList.filter(x => x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        }
        else{
          this.taskList = this.initialtaskList
        }
      })
    }

    addTask(){
        this.httpService.addNewTask(this.newTask).subscribe(()=>{
          alert("New task added successfully");
          this.getAllTasks();
          this.newTask = "";
        })
    }

    getAllTasks(){
      this.httpService.getAllTasks().subscribe((result:any)=>{
        console.log(result);
        this.initialtaskList = this.taskList = result;
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
