import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/MODEL/book.model';
import { BookService } from 'src/app/SERVICE/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  form: FormGroup = new FormGroup ({
    ISBN: new FormControl ("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    author: new FormControl ("", [Validators.required, Validators.minLength(1) ]),
    yearOfPublication: new FormControl  ("", [Validators.required]),
    publisher: new FormControl  ("", [Validators.required]),
  })

  get ISBN() { return this.form.get("ISBN"); }
  get title() { return this.form.get("title"); }
  get author() { return this.form.get("author"); }
  get yearOfPublication() { return this.form.get("yearOfPublication"); }
  get publisher() { return this.form.get("publisher"); }

  constructor(private service: BookService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOne()
  }

  addBook(): void {
    let book: Book = new Book(this.form.value)
    let id: number = Number(this.route.snapshot.params['id']);
    if (id) {
      book._id = id;
      this.service.update(book).subscribe({
        next: (response: any) => {
          this.router.navigate(['books']);
        }
      });
    }else{
      this.service.addBook(book).subscribe({
        next :(book: any) => {
          console.log(book);
          this.router.navigate(['/books/', book._id]);
          }
      });
    }
  }

  getOne () :void {
    let id:number = Number(this.route.snapshot.params['id'])
    if(id){
      this.service.getOne(id).subscribe({
        next: (data:Book) => {
          console.log(data);
          let movie: Book = new Book(data)
          this.form.patchValue(movie)
        }
      })
    }
  }

}
