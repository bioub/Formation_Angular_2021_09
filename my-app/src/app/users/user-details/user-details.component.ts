import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User = {};

  constructor(
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get('userId') as string).subscribe((user) => {
    //     console.log(user);
    //   });
    // });
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('userId') as string),
        switchMap((userId) => this.userService.getById(userId))
      )
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (err) => console.log(err),
      });

    // this.activatedRoute.paramMap.subscribe({
    //   next: (paramMap) => {
    //     this.userService.getById(paramMap.get('userId') as string).subscribe({
    //       next: (user) => {
    //         this.user = user;
    //       },
    //       error: (err) => console.log(err),
    //     });
    //   },
    //   error: (err) => console.log(err)
    // });
  }
}
