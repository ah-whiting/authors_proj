import { Component, OnInit } from "@angular/core";
import { AuthorsApiService } from "../authors-api.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.css"]
})
export class EditAuthorComponent implements OnInit {
  author: object;
  errors: object;
  findError:boolean

  constructor(
    private _api: AuthorsApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.author = {}
    this.getAuthor()
  }

  getAuthor(){
    this._route.params.subscribe((params: Params) => {
      this._api.getOneAuthor(params['id']).subscribe(data => {
        if(data['data']){
          this.author = data['data']
        }
        else{this.findError = true}
      })
    });
  }

  updateAuthor() {
    this._api.updateAuthor(this.author).subscribe(data => {
      console.log(data);
      if (data["data"]) {
        this._router.navigate(["/"]);
      } else {
        this.errors = data["error"]["errors"];
      }
    });
  }
}

