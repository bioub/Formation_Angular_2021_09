import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormTdfComponent } from './login-form-tdf.component';

describe('LoginFormTdfComponent', () => {
  let component: LoginFormTdfComponent;
  let fixture: ComponentFixture<LoginFormTdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormTdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
