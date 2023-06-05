import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor (
    private login: AccountService,
    private router: Router){}
  respForm(response: any){

    let request = { ...response.value, status:true}
    console.log(request);
    this.login.SignUp(request).subscribe(()=>this.router.navigate(['/sign-in']));
  }
}
