import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';

@Component({
  selector: 'app-user-editorD',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorDComponent implements OnInit{

  confirmButtonText = 'Create User';

constructor(
  public dialogRef: MatDialogRef<UserEditorDComponent>,
  @Inject(MAT_DIALOG_DATA) public row: User,
  private userService: AccountService,
  private alertS: SwalAlertService
){ }
  ngOnInit(): void {
    if(!!this.row){
      this.confirmButtonText ='Update User';
    }
  }
  respForm(response:User){
    let request = {...response,status:true}

    if(!!this.row && this.row.id != undefined){
      this.userService.updateUser(request,this.row.id).subscribe((resp)=>{
        if(!resp.hasError){
          this.onNoClick(true);
        }else{
          this.alertS.errorAlert('resp.message','Error')
        }
      });
    }else{
      this.userService.SignUp(request).subscribe(resp=>{
        if(!resp.hasError){
          this.onNoClick(true)
        }else{
          this.alertS.errorAlert('Servicio no disponible por el momento, favor de consultar a su administrador','Error')
        }
      },error=>{
        this.alertS.errorAlert('Servicio no disponible por el momento, favor de consultar a su administrador','Error');
        console.log(error.error);
      });
    }
  }

onNoClick(refresh:boolean = false): void {
  let closeData ={
    closeModal:true,
    refreshData: refresh
  }
  this.dialogRef.close(closeData);
}
OpenDialog:boolean =true;
cancelForm(close:boolean){
  if(close){
    this.OpenDialog = false;
    this.onNoClick();
  }
}
}
