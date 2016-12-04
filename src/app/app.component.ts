import { Component } from '@angular/core';
import { Post } from './post/post.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(){
    this.posts = [
      new Post('PortFolio', 'http://maadan.me', 6),
      new Post('Real Estate App', 'http://naijaproperty.com', 10),
      new Post('Dev Konnect', 'http://dkonnect.com', 5),
      new Post('Jobs and Company Directory App', 'http://job-inbox.com', 6),
      new Post('Web Development firm', 'http://inventivelabs.co', 9),
    ];
  }
  addPost(title: HTMLInputElement, source: HTMLInputElement): boolean {
    console.log(`Adding post title: ${title.value} and link: ${source.value}`);
    this.posts.push(new Post(title.value, source.value, 0));
    title.value = '';
    source.value = '';
    return false;
  }

  sortedPosts(): Post[] {
    return this.posts.sort((a: Post, b: Post) => b.thumbs - a.thumbs))
  }
}
