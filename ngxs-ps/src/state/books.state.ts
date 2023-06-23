import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { BooksService, book } from 'src/app/core/services/books.service';
import { Observable, tap } from 'rxjs';
import { AddBooks, LoadBooks, UpdateBook } from './books.actions';

export class BooksStateModel {
  public books!: book[];
}

const defaults = {
  books: []
};

@State<BooksStateModel>({
  name: 'stateBooks',
  defaults
})
@Injectable()
export class BooksState {
  constructor(private bks:BooksService){}
  @Selector()
  public static getBooks ({ books }:BooksStateModel):book[]{
    return books
  }
  @Action(AddBooks)
  addBook({ getState, setState }: StateContext<BooksStateModel>, { payload }: AddBooks) {
    const state = getState();
    setState({ books: [ ...state.books, payload ] });
  }
  @Action(LoadBooks)
  loadBooks({getState,setState}: StateContext<BooksStateModel>): Observable<book[]>{
    return this.bks.getBooks().pipe(
      tap((books:book[])=>{
        const state = getState();
        setState({...state, books})
      })
    )
}


@Action(UpdateBook)
updateBook({getState,setState}: StateContext<BooksStateModel>,{payload}: UpdateBook){
  const state = getState();
  let bookstmp = state.books.filter(book=>book.id != payload.id);
  setState({books: [...bookstmp,payload]})
}
}
