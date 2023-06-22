import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BooksService, book } from 'src/app/core/services/books.service';
import { BooksState } from 'src/state/books.state';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  @Select(BooksState.getBooks) books$!: Observable<book[]>;

constructor(){ /** EMPTY */ }
ngOnInit(): void {

}

  getIniciales(book:book){
    return ((book.name).charAt(0)).toUpperCase();
    }
}
