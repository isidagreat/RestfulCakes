import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Import OnInit

export class AppComponent implements OnInit{
  tasks =[];
  description: any;
  edit = false;
  desc = false;
  selectedTask: any;
  newTask: any;
  taske = {};
  constructor(private _httpService: HttpService){}
  // ngOninit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.newTask = {title:"", description:""}
    this.getTasksFromService();
  }
 displayinfo(event): void{
   this.selectedTask = event;
  this.desc = true;
  this.description = event
  console.log(JSON.stringify(event))
 }
 onSubmit(){
   let observable = this._httpService.addTask(this.newTask);
   observable.subscribe(data=> {
     console.log("got data from the post Back");
     this.newTask = {title:"", description:""}
   })
   this.getTasksFromService();
 }
 editTask(event){
  this.edit = true;
 }
 onSubmitEdit(task){
   this.taske['id'] = task._id
   console.log(this.taske)
  let newObservable = this._httpService.updateTask(this.taske);
  newObservable.subscribe(data=> {
    console.log("got data from the post Back",data);
  })
 
 }
 deleteTask(task){
   let observable = this._httpService.deleteTask(task);
   observable.subscribe(data =>{
     console.log("Asked to delte ", data);
   })
   this.getTasksFromService();
 }
  
  getTasksFromService(){
        //  Our http Response is an observable, store it in the variable tempObservable
        let observable = this._httpService.getTasks();
        // subscribe to our observable and provide the code we would like to do with our data from the response
        observable.subscribe(data => {
          console.log("got the tasks!", data) 
          this.tasks = data['_user'];
          console.log(this.tasks);
        });
 
  }
  
}
