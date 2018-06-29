import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { DataService } from '../data.service'

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(private titleService: Title, private dataService: DataService) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.titleService.setTitle('Elemental | Contacto')
	}

	onSubmit(form : ngForm){
		form = form.form.value

	}

}
