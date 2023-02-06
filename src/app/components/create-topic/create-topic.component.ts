import { Component } from '@angular/core';
import { NostrService } from '../../services/nostr.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent {
  newTopic = {
    name: '',
    about: ''
  };

  constructor(private nostrService: NostrService) {}

  onSubmit() {
    this.nostrService.createTopic(this.newTopic.name, this.newTopic.about, '')
  }
}
