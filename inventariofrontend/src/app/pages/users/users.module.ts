import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DialogOverviewExampleDialog, UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material.module';
import { UserEditorModule } from 'src/app/components/userEditor/user-editor/user-editor.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    UserEditorModule,
    FormsModule
  ]
})
export class UsersModule { }
