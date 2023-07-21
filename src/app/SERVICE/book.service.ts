import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookSearchResult } from '../MODEL/book.model';

const url = 'http://localhost:3000/api/books'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

    getBooks(): Observable <BookSearchResult> {

    return this.http.get(url).pipe(map((data:any)=> {
      return new BookSearchResult(data)
    }))
  }
}
