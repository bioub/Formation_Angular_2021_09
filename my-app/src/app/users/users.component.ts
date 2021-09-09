import { Component, OnInit } from '@angular/core';

import { User } from './shared/user.model';
import { UserService } from './shared/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  // protected userService: UserService;

  // constructor(userService: UserService) {
  //   this.userService = userService;
  // }
  constructor(protected userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

}
