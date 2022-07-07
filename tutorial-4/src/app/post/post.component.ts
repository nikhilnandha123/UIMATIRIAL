import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //declare post here
  posts:any = []
  p=1;  //for pagination
  key='id' 
  reverse: boolean=false; //reverse

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getPost().subscribe((data:any)=>{this.posts=data})
  }

  sort(key:string){
    this.key = key
    this.reverse =!this.reverse
  }

}
