import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
   }
   
   getTasks(){
    return this._http.get('/tasks');
   }
   
   addTask(newtask){
     return this._http.post('/tasks', newtask)
   }

   updateTask(task){
     return this._http.post('/update/'+task.id+'/', task)
   }
   deleteTask(task){
    return this._http.get('/remove/'+task._id+'/')
  }
}
 