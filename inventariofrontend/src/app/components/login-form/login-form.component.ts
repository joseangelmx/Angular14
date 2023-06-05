import { Component,EventEmitter,Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{
@Input() isSignUp!: boolean;
@Output() responseForm: EventEmitter <any> = new EventEmitter()
formUser!: FormGroup;
defaultFields = {
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',Validators.required)
}
extraFields = {
firstName: new FormControl('',Validators.required),
lastName: new FormControl('',Validators.required),
phoneNumber: new FormControl('', Validators.required)
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
  this.responseForm.emit(this.formUser)
}
}
