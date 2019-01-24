import { Component, OnInit } from '@angular/core';
import { AuthorsApiService } from '../authors-api.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  author:object
  errors:object

  constructor(
    private _api:AuthorsApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = {}
  }

  createAuthor(){
    this._api.createAuthor(this.author).subscribe(data => {
      console.log(data)
      if(data['data']){
        this._router.navigate(['/'])
      }
      else{
        this.errors = data['error']['errors']
      }
    })
    this.author = {}
  }

}
