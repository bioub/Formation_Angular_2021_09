import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
  });

  constructor(protected userService: UserService, protected router: Router) { }

  ngOnInit(): void {
  }

  sendData() {
    this.userService.create(this.userFormGroup.value).subscribe((user) => {
      this.userService.events.emit({
        type: 'user.created',
        data: user
      })
      this.router.navigateByUrl('/users');
    });
  }

}
