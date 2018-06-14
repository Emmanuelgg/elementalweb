import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

    team : Array<any> = [
        {
            id: 1,
            name: "Emmanuel García Gutiérrez",
            occupation: "Proyect Manager",
            img: "../assets/img/logo.svg"
        }
    ]

	constructor() { }

	ngOnInit() {

	}

}
