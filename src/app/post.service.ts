import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = "http://jsonplaceholder.typicode.com/posts";

  //injection
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  postPost(post: IPost){
    return this.http.post(this.url, post);
  }

  putPost(post: IPost, id: number){
    return this.http.put(this.url + "/" + id, post);
  }
}
