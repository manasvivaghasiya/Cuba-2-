import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
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

getToken():string{
  return localStorage.getItem('token')
}
 

  getEvents(){
    this.http.get(`${environment.api}/events`).subscribe((res:any)=>{
      this.Events=res;
      // console.log(res)
    });
  }
  // getlocalDatetime(datetime: any): any {
  //   var date = new Date(datetime.getTime() - (datetime.getTimezoneOffset()  (60  1000)));
  //   date.setUTCSeconds(0);
  //   return date
  // }

}
