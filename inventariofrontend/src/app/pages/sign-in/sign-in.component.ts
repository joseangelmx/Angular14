import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { CookieService } from 'ngx-cookie';
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
    private alertS: SwalAlertService,
    private cookie: CookieService
    ){}

respForm(request: signIn){
  this.login.SignIn(request).subscribe((response:any)=>{
    if(response.hasError){
        this.alertS.errorAlert('Usuario o contraseña incorrectos, favor de validar sus credenciales','Error!')
      //alert('Errosisimo de capa 8, verifica tus credenciales');
    }
    if(response.message === 'Authorized'){
      const session = {...response.model,hasSession:true};
      let objTemp = btoa(JSON.stringify(session));
      this.cookie.put('session',objTemp);
      this.router.navigate(['/home']);
    }
  },(error:any)=> {
  this.alertS.errorAlert('Servicio no disponible por el momento, favor de contactar con el administrador','Lo sentimos')
  console.log(error)
});
}
}
