import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-tdf',
  templateUrl: './login-form-tdf.component.html',
  styleUrls: ['./login-form-tdf.component.css']
})
export class LoginFormTdfComponent implements OnInit {

  user = {
    username: 'romain',
    password: '123456',
    rememberMe: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    console.log(this.user);
  }

}
