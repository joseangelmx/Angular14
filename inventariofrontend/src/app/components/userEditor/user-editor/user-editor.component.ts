import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit{
@Input() row?: User;
@Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
myModal!: bootstrap.Modal;
constructor(){

}
ngOnInit(): void {
  this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
  this.myModal.show()
}
closeModal(){
  this.myModal.hide();
  this.closeModalEvent.emit(true);
}
}
