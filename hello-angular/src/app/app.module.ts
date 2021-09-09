import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CounterComponent } from './counter/counter.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ClockComponent } from './clock/clock.component';
import { ClockWithControlsComponent } from './clock-with-controls/clock-with-controls.component';
import { ButtonComponent } from './button/button.component';

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
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
