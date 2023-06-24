import { book } from "src/app/core/services/books.service";

export class AddBooks {
  static readonly type = '[Books] Add book';
  constructor(public payload: book) { }
}

export class LoadBooks {
  static readonly type = '[Books] Load books';
}

export class UpdateBook {
  static readonly type = '[Books] Update book';
  constructor(public payload: book) { }
}

export class DeleteBook {
  static readonly type = '[Books] Delete book';
  constructor(public payload: book) { }
}

