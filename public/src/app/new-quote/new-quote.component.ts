import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AuthorsApiService } from '../authors-api.service'

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  quote: object;
  author: object;
  errors: object;
  // findError:boolean

  constructor(
    private _api: AuthorsApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quote = {}
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

  updateAuthor() {
    this.author['quotes'].push(this.quote);
    this._api.updateAuthor(this.author).subscribe(data => {
      console.log(data);
      if (data["data"]) {
        this._router.navigate(['/quotes/', this.author['_id']]);
      } else {
        this.errors = data["error"];
        this.author['quotes'].pop();
      }
    });
  }
}
