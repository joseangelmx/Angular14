import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { UserEditorModule } from 'src/app/components/userEditor/user-editor/user-editor.module';
import { UserEditorDModule } from 'src/app/components/dialog/user-editor/user-editor.module';

@NgModule({
  declarations: [
    UsersComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserEditorModule,
    MaterialModule,
    FormsModule,
    UserEditorDModule
  ]
})
export class UsersModule { }
