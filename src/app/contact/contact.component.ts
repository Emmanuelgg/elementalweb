import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { DataService } from '../data.service'

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	name : any
	email : any
	subject : any
	message : any

	constructor(private titleService: Title, private dataService: DataService) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.titleService.setTitle('Elemental | Contacto')
	}

	onSubmit(form : any){
		form = form.form.value

	}

}
