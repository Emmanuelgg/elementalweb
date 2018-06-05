import { Component, OnInit } from '@angular/core';

declare var init:any;
declare var loader:any;
declare var $:any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }
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

  }

}
