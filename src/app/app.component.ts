import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IPost } from './post.interface';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularHttp';

  //for add post
  @ViewChild('postTitle') postTitle: ElementRef;
  @ViewChild('postBody') postBody: ElementRef;
  @ViewChild('postId') postId: ElementRef;
  

  //for get post
  postsArray;

  constructor(private postService: PostService){}

  ngOnInit(){
    //get Post and select
    this.postService.getPosts().subscribe(
      Response => this.postsArray =Response
    )

  }

  //add Post
  addPost(){
    let post: IPost = {UserId: 0, Title: '', Body: ''};
    post.UserId = 10;
    post.Title = this.postTitle.nativeElement.value;
    post.Body = this.postBody.nativeElement.value;

    this.postService.postPost(post).subscribe(
      Response => console.log(Response)
    )
  }

  putPost(){
    let id = +this.postId.nativeElement.value;

    let post: IPost = {UserId: 0, Title: '', Body: ''};
    post.UserId = 10;
    post.Title = this.postTitle.nativeElement.value;
    post.Body = this.postBody.nativeElement.value;

    this.postService.putPost(post, id).subscribe(
      Response => console.log(Response)
    )
  }

}
