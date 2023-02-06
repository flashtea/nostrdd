import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post = {
    title: '',
    body: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
