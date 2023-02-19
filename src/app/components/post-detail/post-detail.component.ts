import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { NostrService } from '../../services/nostr.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post: Post | null;
  comments: Post[] = [];
  postId: string;
  topicId: string;

  comment: string = "";

  constructor(private route: ActivatedRoute,
    private nostrService: NostrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.nostrService.isConnected().subscribe(connected => {
        if (connected) {
          this.nostrService.getPost(this.postId).then(post => {
            this.post = post
            this.topicId = this.getPostTopicId(this.post)
          })
          this.nostrService.listMessages(this.postId).then(comments => this.comments = comments)
        }
      })
    })
  }

  createComment() {
    this.nostrService.createComment(this.topicId, this.comment, this.postId)
  }

  getPostTopicId(post: Post): string {
    if (post.tags) {
      const eTag = post.tags.find(tag => tag[0] === 'e');
      if (eTag) {
        return eTag[1];
      }
    }
    return '';
  }

}
