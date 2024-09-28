import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.createBook(createBookDto);
    }

    @Get()
    findAll() {
        return this.bookService.findAllBooks();
    }   

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.bookService.findOneById(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() createBookDto: CreateBookDto) {
        return this.bookService.updateBook(id, createBookDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.bookService.deleteBook(id);
    }

    @Get('genre/:genre')
    findByGenre(@Param('genre') genre: string) {
        return this.bookService.findBooksByGenre(genre);
    }

    @Get('author/:author')
    findByAuthor(@Param('author') author: string) {
        return this.bookService.findBooksByAuthor(author);
    }
}
