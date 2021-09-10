import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { User } from './shared/user.model';
import { UserService } from './shared/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  // users$!: Observable<User[]>;

  // protected userService: UserService;

  // constructor(userService: UserService) {
  //   this.userService = userService;
  // }
  constructor(protected userService: UserService) {}

  ngOnInit(): void {
    // this.users$ = this.userService.getAll();
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });

    this.userService.events
      .pipe(
        filter((event) => event.type === 'user.created'),
        map((event) => event.data)
      )
      .subscribe((user) => {
        this.users = [...this.users, user];
      });
  }
}
