import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    SharedModule, // exports CommonModule
    BrowserModule, // exports CommonModule
    TodosModule,
    UsersModule,
    AppRoutingModule, // à importer en dernier à cause de la route **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
