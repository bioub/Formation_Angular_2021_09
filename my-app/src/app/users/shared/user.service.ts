import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(protected httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'http://jsonplaceholder.typicode.com/users'
    );
  }

  getAllUsername() {
    return this.getAll().pipe(
      map((users: User[]) => users.map((u) => u.username))
    );
  }
}
