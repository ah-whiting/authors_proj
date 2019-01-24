import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthorsApiService } from '../authors-api.service';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  author: object;
  errors: object;
  // findError:boolean

  constructor(
    private _api: AuthorsApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.author = {}
    this.getAuthor()
  }

  getAuthor(){
    this._route.params.subscribe((params: Params) => {
      this._api.getOneAuthor(params['id']).subscribe(data => {
        if(data['data']){
          this.author = data['data']
        }
        // else{this.findError = true}
      })
    });
  }
  deleteQuote(idx){
    this.author['quotes'].splice(idx, 1);
    this._api.updateAuthor(this.author).subscribe(data => {
      if (data["data"]) {
        this._router.navigate(['/quotes/', this.author['_id']]);
      } else {
        this.errors = data["error"]["errors"];
      }
    });
  }
  vote(idx, num){
    this.author['quotes'][idx]['vote'] += num;
    this._api.updateAuthor(this.author).subscribe(data => {
      if (data["data"]) {
        this._router.navigate(['/quotes/', this.author['_id']]);
      } else {
        this.errors = data["error"]["errors"];
      }
    });
  }
}
