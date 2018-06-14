import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { challenges } from './challenge.data'

@Component({
	selector: 'app-challenge',
	templateUrl: './challenge.component.html',
	styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

    challenges = challenges;

	constructor(private titleService: Title) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.titleService.setTitle('Elemental | Consursos')
	}

}
