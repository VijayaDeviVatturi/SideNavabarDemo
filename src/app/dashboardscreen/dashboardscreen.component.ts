import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardscreen',
  templateUrl: './dashboardscreen.component.html',
  styleUrls: ['./dashboardscreen.component.scss']
})
export class DashboardscreenComponent implements OnInit {
  password : String = '';
  
  User: String = '';
  name : String = '';
  constructor() { }

  ngOnInit() {
  }
  clcikdashboard(id){
    console.log(id)
     
    }
    
}
