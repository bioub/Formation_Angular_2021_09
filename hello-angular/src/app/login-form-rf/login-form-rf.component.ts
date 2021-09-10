import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-rf',
  templateUrl: './login-form-rf.component.html',
  styleUrls: ['./login-form-rf.component.css']
})
export class LoginFormRfComponent implements OnInit {

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
