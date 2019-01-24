import { Component, OnInit } from '@angular/core';
import { AuthorsApiService } from '../authors-api.service'

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {

  authors:object[]

  constructor(
    private _api: AuthorsApiService
  ) { }

  ngOnInit() {
    this.getAuthors()
  }

  getAuthors(){
    this._api.getAllAuthors().subscribe(data => {
      this.authors = data['data']
    })
  }
  
  deleteAuthor(id){
    this._api.deleteAuthor(id).subscribe(data => {
      this.getAuthors();
    })
  }
}
