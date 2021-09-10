import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show todo.title', () => {
    component.todo = { title: 'Hello' };
    fixture.detectChanges();
    const hostEl = fixture.nativeElement as HTMLElement;
    expect(hostEl.textContent).toContain('Hello');
  });

  it('should emit delete on click', () => {
    component.todo = { title: 'Hello' };
    fixture.detectChanges();
    const hostEl = fixture.nativeElement as HTMLElement;

    const spy = jasmine.createSpy();

    component.delete.subscribe(spy);

    hostEl.querySelector('button')?.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledWith(component.todo);
  });
});
