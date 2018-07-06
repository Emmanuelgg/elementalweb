import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
      form = form.form.value
      this.dataService.login('login', form).subscribe(
          (response) => {

          }
      );
  }

}
