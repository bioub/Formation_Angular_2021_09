import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form-tdf',
  templateUrl: './login-form-tdf.component.html',
  styleUrls: ['./login-form-tdf.component.css']
})
export class LoginFormTdfComponent implements OnInit {

  user = {
    username: '',
    password: '',
    rememberMe: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    console.log(this.user);
  }

}
