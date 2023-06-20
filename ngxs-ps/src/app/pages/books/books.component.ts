import { Component, OnInit } from '@angular/core';
import { BooksService, book } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  books!: book[];
constructor(private bks: BooksService){ /** EMPTY */ }
ngOnInit(): void {
  this.bks.getBooks().subscribe(resp=> this.books = resp)
}

  getIniciales(book:book){
    return ((book.name).charAt(0)).toUpperCase();
    }
}
