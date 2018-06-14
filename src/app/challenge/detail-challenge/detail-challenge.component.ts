import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Title } from '@angular/platform-browser';

import { challenges } from '../challenge.data'

@Component({
	selector: 'app-detail-challenge',
	templateUrl: './detail-challenge.component.html',
	styleUrls: ['./detail-challenge.component.css']
})
export class DetailChallengeComponent implements OnInit {

	challenges = challenges

	constructor(
		private titleService: Title,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.titleService.setTitle('Elemental | Consursos - Detalles')
	}

    getChallenge(){
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(id);
        //console.log(challenges.filter( challenge => id == challenge.id))
    }
}
