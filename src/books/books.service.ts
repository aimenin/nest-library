import { Injectable } from '@nestjs/common';
import { Book } from './types';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    {
      id: '123',
      bookCover: '123',
      name: '123',
    },
  ];

  getAll(): Book[] {
    return this.books;
  }
}
