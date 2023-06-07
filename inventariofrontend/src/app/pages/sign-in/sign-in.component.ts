import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { signIn, signInResponse } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private login:AccountService,
    private router: Router
    ){}

respForm(request: signIn){
  this.login.SignIn(request).subscribe((response: signInResponse) =>{
    if(response.message === 'Authorized'|| response.title === 'Authorized'){
      environment.hasSession = true;
      this.router.navigate(['/home']);
    }
  });
}
}
