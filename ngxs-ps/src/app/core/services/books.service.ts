import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
books: book[]=[
  {id:0,name:'cocina con sabor',description:'Recetario de cocina de norte a sur',price:100,status:true},
  {id:1,name:'cocina 1',description:'Recetario de cocina de norte a sur',price:100,status:true},
  {id:2,name:'cocina 2',description:'Recetario de pastas',price:1100,status:false},
  {id:3,name:'cocina 3',description:'Recetario de carnes',price:1200,status:false},
  {id:4,name:'cocina 4',description:'Recetario de postres',price:10,status:true},
]
  constructor() { /** empty */ }
  getBooks(): Observable<book[]>{
    return of (this.books);
  }

  addBook(book:book) : Observable<book[]>{
    this.books = [...this.books,book]
    return of (this.books);
  }

  updateBook(book:book) : Observable<book[]>{
    this.books = this.books.filter(bk=>bk.id != book.id);
    this.books.push(book);
    return of (this.books);
  }
  deleteBook(book:book) : Observable<book[]>{
    this.books = this.books.filter(bk => bk.id != book.id);
    return of (this.books);
  }

  getBook(id:number) : Observable<book>{
    let book = this.books.find(bk => bk.id == id);
    if(!!book)
      return of(book);
    else
      return of();
  }
}
export interface book {
  id:number;
  name:string;
  description:string;
  price:number;
  status:boolean;
}
