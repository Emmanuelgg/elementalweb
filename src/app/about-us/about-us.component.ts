import { Component, OnInit, Input } from '@angular/core';

import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
	@Input() appComponent;

    team : Array<any> = [
        {
            id: 1,
            name: "Emmanuel García Gutiérrez",
            occupation: "Proyect Manager",
            img: "../assets/img/logo.svg"
        }
    ]

	constructor(private titleService: Title) { }

	ngOnInit() {}

	ngAfterViewInit(){
		this.titleService.setTitle('Elemental | Acerca de')
	}

}
