
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { book } from 'src/app/core/services/books.service';
import { BooksState } from 'src/state/books.state';
import {UpdateBook} from 'src/state/books.actions'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  @Select(BooksState.getBooks) books$!: Observable<book[]>;

  myForm!:FormGroup
  isEditorMode: boolean = false;
  myModal!:bootstrap.Modal;
  constructor(
  private store:Store,
  private fb:FormBuilder
  ){ /** EMPTY */ }
ngOnInit(): void {
  this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('exampleModal'));
  this.myForm = this.fb.group({
  id: new FormControl(0),
  name: new FormControl(''),
  description: new FormControl(''),
  price: new FormControl(0),
  status:  new FormControl(false)
})
}

  getIniciales(book:book){
    return ((book.name).charAt(0)).toUpperCase();
    }

  editBook(book:book){
    this.myModal.show();
    this.isEditorMode = true;
    this.myForm.patchValue(book);
    console.log(book);
  }

  EDBook(book:book){
    let book1 = {...book};
    book1.status = !book.status;
    this.store.dispatch(new UpdateBook(book1));
  }
  subook(){
    if(this.isEditorMode){
      this.store.dispatch(new UpdateBook(this.myForm.value));
    }
    this.myModal.hide();
    this.isEditorMode=false;
  }
}
