import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public Events = [];

  // today:Date = new Date();
  // pipe = new DatePipe('en-US');
  todayeWithPipe = null;
  row:any;
  prop=[];

  columns = [
    {name:'Title', prop:'title'},
    {name:'Base Url', prop:'baseUrl'},
    {name:'Booking Start Date Time', prop:'bookingEndDateTime'},
    {name:'Booking End Date Time', prop:'bookingStartDateTime'},
    {name:'Event From', prop:'eventFrom'},
    {name:'Event To', prop:'eventTo'},
    {name:'is Active', prop:'isActive'},
    {name:'Action', prop:'action'}
  ]
  
  constructor(private http:HttpClient,
    private change:ChangeDetectorRef) { 
   

  }

  ngOnInit(): void {
    this.getEvents();
    // this.todayeWithPipe = this.pipe.transform(Date.now(),'dd/MM/yyyy');
  }


  
getToken():string{
  return localStorage.getItem('token')
}
 

  getEvents(){
    this.http.get(`${environment.api}/events`).subscribe((res:any)=>{
      this.Events=res;
      this.change.detectChanges();
    
    });
  }

  deleteEvent(id:string){
    debugger
  this.http.delete(`${environment.api}/events/id=${id}`)
  .subscribe((res:any)=>{
    if(res.isSuccess){
      alert('data successfully delete')
      this.getEvents();
    }else{
      alert(res.message)
    }
  })
  }


}
