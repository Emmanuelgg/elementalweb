import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

declare var init:any;
declare var loader:any;
declare var $:any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private dataService:DataService) {

  }
  res:any;
  ngAfterViewInit(){
      if(typeof(init) === 'function'){
           init();
          $(".loader").fadeOut();
  		 $("#preloder").delay(400).fadeOut("slow");
      }

  }

  ngBefoewViewInit(){

  }
  ngOnInit() {
      this.getIpAdress();

  }
  getIpAdress(){
      this.dataService.getIpAdress().subscribe(
          (response) =>
          {
              this.res = response;
          }
      );
  }

}
