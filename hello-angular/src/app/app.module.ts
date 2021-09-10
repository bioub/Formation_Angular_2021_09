import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonComponent } from './button/button.component';
import { ClockWithControlsComponent } from './clock-with-controls/clock-with-controls.component';
import { ClockComponent } from './clock/clock.component';
import { CounterComponent } from './counter/counter.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloComponent } from './hello/hello.component';
import { LoginFormRfComponent } from './login-form-rf/login-form-rf.component';
import { LoginFormTdfComponent } from './login-form-tdf/login-form-tdf.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginFormComponent,
    CounterComponent,
    HelloWorldComponent,
    MultiStateButtonComponent,
    CapitalizePipe,
    ButtonGroupComponent,
    ClockComponent,
    ClockWithControlsComponent,
    ButtonComponent,
    LoginFormTdfComponent,
    LoginFormRfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Template driven form
    ReactiveFormsModule, // Reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
