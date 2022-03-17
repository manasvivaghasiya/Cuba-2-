import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent implements OnInit {

  EventData:FormGroup;
  Events:any;
  getEvents: any;
 

  constructor( private http:HttpClient,
                private router:Router) { }

  ngOnInit(): void {

  }

saveEvent(){
  debugger
    this.http.post(`${environment.api}/events`,this.Events)
    .subscribe((res:any)=>{
      if(res.isSuccess){
        alert('data SuccessFully added')
        this.getEvents();
        this.router.navigate(['/dashboard/eventList']);
      }else{
        alert(res.message);
      }
    });
  }
 
}
