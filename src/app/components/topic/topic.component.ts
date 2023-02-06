import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { NostrService } from '../../services/nostr.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topic = {
    name: 'Angular',
    description: 'A discussion board for all things Angular'
  };

  posts: Post[] = [];

  topicId: string = '';

  constructor(private route: ActivatedRoute,
    private nostrService: NostrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topicId = params['id'];
      this.nostrService.isConnected().subscribe(connected => {
        if (connected) {
          this.nostrService.listPosts(this.topicId).then(posts => this.posts = posts);
        }
      })
    });
  }
}
