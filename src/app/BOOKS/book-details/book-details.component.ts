import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/MODEL/book.model';
import { BookService } from 'src/app/SERVICE/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId: number =-1;

  book: Book = new Book();

  constructor(private service: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.bookId = params['id'];

    })
    this.getDEtails();

  }

  getDEtails(): void {
    this.service.getOne(this.bookId).subscribe({
      next: (data: Book) => {
        this.book = data
        console.log(data);
      }
    })
  }

}
