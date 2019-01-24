import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component'
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component'

const routes: Routes = [

  { path: "", component: ListAuthorsComponent },
  { path: "new", component: NewAuthorComponent },
  { path: "edit/:id", component: EditAuthorComponent },
  { path: 'quotes/:id', component: ListQuotesComponent },
  { path: 'quotes/:id/new', component: NewQuoteComponent },
  { path: 'quotes/edit/:id', component: EditQuoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
