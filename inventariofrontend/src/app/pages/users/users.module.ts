import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material.module';
import { UserEditorModule } from 'src/app/components/userEditor/user-editor/user-editor.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    UserEditorModule
  ]
})
export class UsersModule { }
