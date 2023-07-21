import { Review } from './../../MODEL/review.model';
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

  review: Review [] = [];

  reviewId: number =-1;

  reviews : Review= new Review()

  constructor(private service: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.bookId = params['id'];
      this.reviewId = params['id']
    })
    this.getReviews();
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

  getReviews() : void {
    this.service.getReviews(this.bookId).subscribe({
      next: (data: Review[]) => {
        this.review = data
        console.log(data);
      }
    })
  }

  onDelete(review: Review): void {
    this.service.delete(review).subscribe({
      next: (response: Review) => {
        this.getReviews();
      }
    });
  }

}
