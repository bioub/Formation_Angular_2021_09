import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-rf',
  templateUrl: './login-form-rf.component.html',
  styleUrls: ['./login-form-rf.component.css']
})
export class LoginFormRfComponent implements OnInit {

  userFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
    this.userFormGroup.valueChanges.subscribe((user) => {
      console.log('user change', user);
    });
  }

  sendData() {
    console.log(this.userFormGroup.value);
  }

}
