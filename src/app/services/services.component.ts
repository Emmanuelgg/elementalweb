import { Component, OnInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    services: Array<any> = [
		{
			id: 1,
			name: "Aplicaciones web",
			description: "Desarrollo de aplicaciones web adaptadas a las necesidades de nuestros clientes, utilizando la mejor tecnología.",
			icon: "flaticon-023-flask"
		},
        {
			id: 2,
			name: "Aplicaciones moviles",
			description: "Desarrollo de aplicaciones web adaptadas a las necesidades de nuestros clientes, utilizando la mejor tecnología.",
			icon: "flaticon-018-laptop-1"
		},
        {
			id: 3,
			name: "Sitios web",
			description: "Si quieres que las personas encuentren de manera mas rapida tu negocio, es tuy mejor opcion, nosotros creamos un sitio web ideal para ti.",
			icon: "flaticon-043-sketch"
		},
        {
			id: 4,
			name: "Branding",
			description: "Te ayudamos a administrar tus redes sociales, haciendo que tu negocio obtenga mas clientes potenciales y que las personas te conozcan día a día",
			icon: "flaticon-039-vector"
		}
	]

	constructor(private titleService: Title) { }

	ngOnInit() {}

	ngAfterViewInit(){
		this.titleService.setTitle('Servicios | Elemental web')
	}

}
