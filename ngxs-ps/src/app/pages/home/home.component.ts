import { Component, OnInit } from '@angular/core';
import { Select, Selector } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BooksService, book } from 'src/app/core/services/books.service';
import { BooksState } from 'src/state/books.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  books!:book[]
@Select(BooksState.getBooks) books$!: Observable<book[]>;

constructor(){ /** EMPTY */ }

ngOnInit(): void {

}

getIniciales(book:book){
return ((book.name).charAt(0)).toUpperCase();
}

}
