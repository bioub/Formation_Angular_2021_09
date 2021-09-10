import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit /*, OnDestroy */ {
  user$!: Observable<User>;

  // private subscription!: Subscription;

  constructor(
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('userId') as string),
      switchMap((userId) => this.userService.getById(userId)),
    );
  }

  // ngOnInit(): void {
  //   // this.activatedRoute.paramMap.subscribe((paramMap) => {
  //   //   this.userService.getById(paramMap.get('userId') as string).subscribe((user) => {
  //   //     console.log(user);
  //   //   });
  //   // });
  //   this.subscription = this.activatedRoute.paramMap
  //     .pipe(
  //       map((paramMap) => paramMap.get('userId') as string),
  //       switchMap((userId) => this.userService.getById(userId))
  //     )
  //     .subscribe({
  //       next: (user) => {
  //         this.user = user;
  //       },
  //       error: (err) => console.log(err),
  //     });

  //   // Callback hell + bug si un premiere requete arrive apres la seconde :
  //   // this.activatedRoute.paramMap.subscribe({
  //   //   next: (paramMap) => {
  //   //     this.userService.getById(paramMap.get('userId') as string).subscribe({
  //   //       next: (user) => {
  //   //         this.user = user;
  //   //       },
  //   //       error: (err) => console.log(err),
  //   //     });
  //   //   },
  //   //   error: (err) => console.log(err)
  //   // });
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
