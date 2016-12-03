import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addPost(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding post title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
