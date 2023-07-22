import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book, BookSearchResult } from '../MODEL/book.model';
import { Review } from '../MODEL/review.model';

const url = 'http://localhost:3000/api/books'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

    getBooks(params?:any): Observable <BookSearchResult> {
      let options = {}
      if (params) {
        options = {
          params: new HttpParams()
          .set("page", params.page || "")
          .set("pageSize", params.pageSize || "")
          .set("sort", params.sort || "")
          .set('sortDirection', params.sortDirection)
          .set('filter', JSON.stringify(params.filter)),
        }
      }

    return this.http.get(url, options).pipe(map((data:any)=> {
      return new BookSearchResult(data)
    }))
  }

  addBook(book: Book) : Observable<any> {
    return this.http.post(url, book)
  }

  getOne(id:number): Observable<Book> {
    return this.http.get(url + '/' + id).pipe(map((data:any) =>{
      return new Book(data)
    }))
  }

  update(book: Book): Observable<any> {
    return this.http.put(url + "/" + book._id, book);
  }

  getReviews(id: number): Observable<Review[]> {
    return this.http.get('http://localhost:3000/api/books/'+ id + '/reviews').pipe(map((data:any) =>{
      return data.map((elem:any) => new Review(elem))
    }))
  }

  delete(review: Review) : Observable<any> {
    return this.http.delete('http://localhost:3000/api/reviews/' + review._id).pipe(map((data:any) => {
      return new Review(data);
    }))
  }

}
