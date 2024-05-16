import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( public httpClient : HttpClient) { }

  addNewTask(task : string){
    return this.httpClient.post("http://localhost:3000/tasks",{
      title : task
    })
  }

  getAllTasks(){
    return this.httpClient.get("http://localhost:3000/tasks");
  }

  updateTask(task:any){
    debugger;
    return this.httpClient.put("http://localhost:3000/tasks/"+task.id,task);
  }
}
