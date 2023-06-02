import { Component,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
@Input() isSignUp: boolean= true;
onSubmitForm(f:NgForm){
  console.log('Valores del form',f.value);
  console.log('Mi formulario',f);
}
}
