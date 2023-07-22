import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  @Output() search: EventEmitter<string> = new EventEmitter();



  onSearch(): void {
    this.search.emit(this.form.value.search);
  }

}
