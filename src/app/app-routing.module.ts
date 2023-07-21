import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './CORE/home/home.component';
import { AboutComponent } from './CORE/about/about.component';
import { BooksComponent } from './BOOKS/books/books.component';
import { BookDetailsComponent } from './BOOKS/book-details/book-details.component';
import { BookFormComponent } from './BOOKS/book-form/book-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books/add', component: BookFormComponent },
  { path: 'add-book/:id', component: BookFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
