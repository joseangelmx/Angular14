import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class LoginFormModule { }
