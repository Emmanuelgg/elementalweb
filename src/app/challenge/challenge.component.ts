import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { challenges } from './challenge.data'

import { first } from 'rxjs/operators';

@Component({
	selector: 'app-challenge',
	templateUrl: './challenge.component.html',
	styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

    challenges = challenges;
	challenge : any;

	constructor(private titleService: Title) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.titleService.setTitle('Elemental | Consursos')
	}

	getChallenge(id: number){
		this.challenge = challenges.filter(challenge => id == challenge.id)
		this.challenge = this.challenge[0]
	}

}
