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

  params = {
    page: 1,
    pageSize: 10,
    sort: "title",
    sortDirection: 'asc',
  }

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.service.getBooks(this.params).subscribe({
      next: (data:BookSearchResult) => {
        console.log(data);
        this.books = data
      }
    })
  }

  onPageChanged(newPage:number) : void{
    this.params.page = newPage;
    this.getBooks();
  }

  onPageSizeChanged(newPageSize:number) : void{
    this.params.pageSize = newPageSize + 10;
    this.params.page = 1;
    this.getBooks();
  }

}
