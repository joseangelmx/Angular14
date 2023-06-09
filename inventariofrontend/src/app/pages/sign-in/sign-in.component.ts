import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { signIn, signInResponse } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private login:AccountService,
    private router: Router,
    private alertS: SwalAlertService
    ){}

respForm(request: signIn){
  this.login.SignIn(request).subscribe((response:any)=>{
    if(response.hasError){
        this.alertS.errorAlert('Usuario o contraseña incorrectos, favor de validar sus credenciales','Error!')
      //alert('Errosisimo de capa 8, verifica tus credenciales');
    }
    if(response.message === 'Authorized'){
      environment.hasSession = true;
      this.router.navigate(['/home']);
    }
  },(error:any)=> console.log(error)
  );
}
}
