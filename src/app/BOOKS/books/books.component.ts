import { Component, OnInit } from '@angular/core';
import { BookSearchResult } from 'src/app/MODEL/book.model';
import { BookService } from 'src/app/SERVICE/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BookSearchResult = new BookSearchResult()

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.service.getBooks().subscribe({
      next: (data:BookSearchResult) => {
        console.log(data);
        this.books = data
      }
    })
  }

}
