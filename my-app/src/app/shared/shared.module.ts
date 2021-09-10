import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonGroupComponent } from './button-group/button-group.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';

@NgModule({
  declarations: [
    ButtonGroupComponent,
    MultiStateButtonComponent,
  ],
  imports: [
    CommonModule, // importe CommonModule pour pouvoir utiliser
    // *ngIf, [ngClass], | date, | uppercase dans les composants de Shared
  ],
  exports: [
    CommonModule, // exporte CommonModule pour ne pas avoir à importer
    // ce module lorsqu'on importe déjà Shared (ce qui doit être le cas
    // de tous les modules)
    ReactiveFormsModule,
    ButtonGroupComponent,
    MultiStateButtonComponent,
  ]
})
export class SharedModule { }
