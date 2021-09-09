import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserAddComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    // association entre le token d'injection (nom de la classe)
    // et un objet
    // {
    //   provide: UserService,
    //   useValue: new UserService(),
    // }
    // association entre le token d'injection (nom de la classe)
    // et une factory (une fonction qui retourne)
    // {
    //   provide: UserService,
    //   useFactory: userServiceFactory
    // }
    // association entre le token d'injection (nom de la classe)
    // et un alias (un autre token)
    // {
    //   provide: UserService,
    //   useExisting: UserServiceWithCache, // le provider de UserServiceWithCache doit exister
    // }
    // association entre le token d'injection (nom de la classe)
    // et une classe pour laisser l'injecteur d'Angular créer le service
    // {
    //   provide: UserService,
    //   useClass: UserService,
    // }
    // ou en version raccourcie
    // UserService
  ]
})
export class UsersModule { }
