import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { NostrService } from '../../services/nostr.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  newPost: Post = {
    title: '',
    message: ''
  };

  topicId: string = '';

  constructor(private route: ActivatedRoute,
    private nostrService: NostrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topicId = params['id'];
    });
  }

  onSubmit() {
    this.nostrService.createMessage(this.topicId, this.newPost.title, this.newPost.message)
  }
}
