import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	lat: number = 19.7037327;
	lng: number = -101.2411434;
    title: string = 'Elemental web'
    zoom: number = 10

	constructor(private titleService: Title) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.titleService.setTitle('Elemental | Contacto')
	}

}
