import { Component, OnInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

import { DataService } from '../data.service'

import { HttpClient } from '@angular/common/http';

declare var init: any;
declare var loader: any;
declare var $: any

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	commentaries: Array<any> = [
		{
			id: 1,
			name: "Alejandra Gutierrez",
			company_name: "Centenario",
			commentary: "Exelente trabajo, quede muy satisfecho con mi sitio web",
            img: '../assets/img/logo-100x100.svg'
		},
        {
			id: 2,
			name: "Gloria García",
			company_name: "Bio-farma",
			commentary: "Exelente trato al cliente, el mejor diseño y atención",
            img: '../assets/img/logo-100x100.svg'
		}
	]

	constructor(private dataService: DataService, private titleService: Title) {

	}
	res: any;
	ngAfterViewInit() {
		if (typeof (init) === 'function') {
			init();
			$(".loader").fadeOut();
			$("#preloder").delay(400).fadeOut("slow");
		}

		this.titleService.setTitle('Inicio | Elemental web')

	}

	ngOnInit() {
		this.getIpAdress();
	}

	getIpAdress() {
		this.dataService.getIpAdress().subscribe(
			response => console.log(response)
		);
	}

}
