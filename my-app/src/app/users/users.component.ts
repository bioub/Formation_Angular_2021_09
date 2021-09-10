import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './shared/user.model';
import { UserService } from './shared/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$!: Observable<User[]>;

  // protected userService: UserService;

  // constructor(userService: UserService) {
  //   this.userService = userService;
  // }
  constructor(protected userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
    // this.userService.getAll().subscribe((users) => {
    //   this.users = users;
    //   this.loading = false;
    // });
  }

}
