import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  host: {
    class: 'row'
  }
})
export class PostComponent implements OnInit {
  thumbs: number;
  title: string;
  link: string;

  constructor() {
    this.title = "Post 1";
    this.link = 'http://maadan.me';
    this.thumbs = 5;
  }

  thumbUp(){
    this.thumbs += 1;
    return false;
  }

  thumbDown(){
    this.thumbs -= 1;
    return false;
  }

  ngOnInit() {
  }

}
