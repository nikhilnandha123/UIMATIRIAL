import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  url = "https://jsonplaceholder.typicode.com/posts"
  
  
  constructor(private _Http:HttpClient) { }

  getPost(){
    return this._Http.get(this.url)
  }
}
