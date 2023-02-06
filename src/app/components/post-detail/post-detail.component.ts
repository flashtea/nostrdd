import { Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post = {
    title: 'Post Title',
    subforum: 'Subforum',
    body: 'Post body goes here.',
    votes: 10
  };

  comments = [
    {
      author: 'Author 1',
      body: 'Comment 1'
    },
    {
      author: 'Author 2',
      body: 'Comment 2'
    },
    {
      author: 'Author 3',
      body: 'Comment 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
