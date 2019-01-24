import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorsApiService {

  constructor(
    private _http:HttpClient
  ) { }

  getAllAuthors(){
    return this._http.get(`/api/authors`)
  }

  getOneAuthor(id){
    return this._http.get(`/api/authors/${id}`)
  }

  createAuthor(data){
    return this._http.post(`/api/authors`, data)
  }

  updateAuthor(data){
    return this._http.put(`/api/authors/${data._id}`, data)
  }

  deleteAuthor(id){
    return this._http.delete(`/api/authors/${id}`)
  }

}
