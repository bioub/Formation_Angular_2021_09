import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  // TEMPORAIRE (peut etre a supprimer dans Angular 13)
  beforeEach(() => {
    const consoleError = console.error;
    console.error = (...args) => {
      fail(args[0]);
      consoleError(...args);
    }
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive users from backend', () => {
    const controller = TestBed.inject(HttpTestingController);
    controller.expectOne('http://jsonplaceholder.typicode.com/users').flush([
      {id: 1, name: 'Toto'},
      {id: 2, name: 'Titi'},
    ]);

    fixture.detectChanges();

    const hostEl = fixture.nativeElement as HTMLElement;
    expect(hostEl.textContent).toContain('Toto');

    controller.verify();
  });
});
