import { Component } from '@angular/core';
import { Post } from './post/post.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addPost(title: HTMLInputElement, source: HTMLInputElement): boolean {
    console.log(`Adding post title: ${title.value} and link: ${source.value}`);
    return false;
  }
}
