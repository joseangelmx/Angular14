import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{
@Input() isSignUp!: boolean;

formUser!: FormGroup;
defaultFields = {
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',Validators.required)
}
extraFields = {
name: new FormControl(''),
lastname: new FormControl('')
}
constructor(
  private fb:FormBuilder
){
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  this.initForm();
}
initForm(){
  let userFields = {...this.defaultFields};
  if(this.isSignUp){
    userFields = {...this.defaultFields, ...this.extraFields};
  }
  this.formUser = this.fb.group(
    userFields
  )
}

onSubmit(){
  if(this.formUser.invalid){
    alert('Debe ingresar todos los campos');
    return;
  }
  console.log("Form Submitted", this.formUser.value);
}
}
