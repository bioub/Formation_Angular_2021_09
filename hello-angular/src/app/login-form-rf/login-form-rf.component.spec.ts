import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormRfComponent } from './login-form-rf.component';

describe('LoginFormRfComponent', () => {
  let component: LoginFormRfComponent;
  let fixture: ComponentFixture<LoginFormRfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormRfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
