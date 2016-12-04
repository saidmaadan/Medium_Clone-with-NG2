import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model.ts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  host: {
    class: 'row'
  }
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor() {
    this.post = new Post("Post 1", 'http://maadan.me', 10);

  }

  thumbUp(): boolean{
    this.post.thumbUp();
    return false;
  }

  thumbDown(){
    this.post.thumbDown();
    return false;
  }

  ngOnInit() {
  }

}
