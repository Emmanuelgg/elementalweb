import { Component } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    visitorCounter : number = 0;
    constructor(private dataService: DataService){
        this.getVisitors()
    }


    getVisitors(){
		this.dataService.visitorCounter().subscribe(
			(response) => {
				this.dataService.getTableDisctint('get/distinct', 'visitor', 'ip_address').subscribe(
					response => {
                        this.visitorCounter = response.data.length
                    }
				);
			}
		);
	}
}
