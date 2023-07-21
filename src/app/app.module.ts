import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './CORE/home/home.component';
import { AboutComponent } from './CORE/about/about.component';
import { SideBarComponent } from './CORE/side-bar/side-bar.component';
import { BooksComponent } from './BOOKS/books/books.component';
import { BookDetailsComponent } from './BOOKS/book-details/book-details.component';
import { BookFormComponent } from './BOOKS/book-form/book-form.component';
import { BookItemComponent } from './BOOKS/book-item/book-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SideBarComponent,
    BooksComponent,
    BookDetailsComponent,
    BookFormComponent,
    BookItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
