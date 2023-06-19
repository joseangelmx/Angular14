import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import * as bootstrap from 'bootstrap';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit{
@Input() row?: User;
@Input() confirmButtonText='Create User'
@Output() closeModalEvent: EventEmitter<Object> = new EventEmitter<Object>()
myModal!: bootstrap.Modal;
constructor(
private userService:AccountService,
private alertS: SwalAlertService
){

}
ngOnInit(): void {
  this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
  this.myModal.show()
  if(!!this.row){
    this.confirmButtonText ='Update User';
  }
}
closeModal(refresh:boolean= false){
  this.myModal.hide();
  let close ={
    closeModal:true,
    refreshData:refresh
  }
  this.closeModalEvent.emit(close);
}
respForm(response:User){
  let request = {...response,status:true}

  if(!!this.row && this.row.id != undefined){
    this.userService.updateUser(request,this.row.id).subscribe((resp)=>{
      if(!resp.hasError){
        this.closeModal(true);
      }else{
        this.alertS.errorAlert('resp.message','Error')
      }
    });
  }else{
    this.userService.SignUp(request).subscribe(resp=>{
      if(!resp.hasError){
        this.closeModal(true);
      }else{
        this.alertS.errorAlert('Servicio no disponible por el momento, favor de consultar a su administrador','Error');
      }
    },error=>{
      this.alertS.errorAlert('Servicio no disponible por el momento, favor de consultar a su administrador','Error');
      console.log(error.error);
    });
  }
}
cancelForm(close:boolean){
  if(close){
    this.closeModal();
  }
}
}
