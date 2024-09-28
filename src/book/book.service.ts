import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Book } from '@prisma/client';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = await this.prisma.book.create({
      data: createBookDto,
    });

    return book;
  }

  async findAllBooks(): Promise<Book[]> {
    const books = await this.prisma.book.findMany();
    return books;
  }

  async findOneById(id: number): Promise<Book | null> {
    const book = await this.prisma.book.findUnique({ where: { id } });
    return book;
  }

  async updateBook(id: number, createBookDto: CreateBookDto): Promise<Book | null> {
    const updatedBook = await this.prisma.book.update({
      where: { id },
      data: createBookDto,
    });
    return updatedBook;
  }

  async deleteBook(id: number): Promise<Book | null> {
    const deletedBook = await this.prisma.book.delete({ where: { id } });
    return deletedBook;
  }

  async findBooksByGenre(genre: string): Promise<Book[]> {
    const books = await this.prisma.book.findMany({
      where: {
        genre: genre,
      },
    });
    return books;
  }

  async findBooksByAuthor(author: string): Promise<Book[]> {
    const books = await this.prisma.book.findMany({
      where: {
        author: author,
      },
    });
    return books;
  }
  
}
