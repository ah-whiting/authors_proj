import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

import { AuthorsApiService} from './authors-api.service';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component'

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponent,
    EditAuthorComponent,
    ListAuthorsComponent,
    ListQuotesComponent,
    NewQuoteComponent,
    EditQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthorsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
