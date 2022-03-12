import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public Events = [];


  constructor(private http:HttpClient) { 
   

  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.http.get(`${environment.api}/events`).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
