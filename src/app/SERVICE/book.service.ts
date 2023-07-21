import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookSearchResult } from '../MODEL/book.model';

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
        }
      }

    return this.http.get(url, options).pipe(map((data:any)=> {
      return new BookSearchResult(data)
    }))
  }
}
