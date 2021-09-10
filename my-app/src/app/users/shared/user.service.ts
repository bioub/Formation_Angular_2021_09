import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

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

  getById(id: string | number): Observable<User> {
    if (id == '2') {
      return this.httpClient.get<User>(
        'http://jsonplaceholder.typicode.com/users/' + id
      ).pipe(
        delay(3000),
      );
    }

    return this.httpClient.get<User>(
      'http://jsonplaceholder.typicode.com/users/' + id
    );
  }

  getAllUsername() {
    return this.getAll().pipe(
      map((users: User[]) => users.map((u) => u.username))
    );
  }

  create(user: User) {
    return this.httpClient.post('http://jsonplaceholder.typicode.com/users', user);
  }
}
