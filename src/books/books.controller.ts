import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './types';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.getAll();
  }
}
