import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = {
    username: 'romain',
    password: '123456',
    rememberMe: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateUsername(event: Event) {
    this.user.username = (event.target as HTMLInputElement).value;
  }

  sendData(event: Event) {
    event.preventDefault();
    console.log(this.user);
  }

}
