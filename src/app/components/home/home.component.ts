import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic';
import { NostrService } from '../../services/nostr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topics: any[] = [];

  constructor(private nostr: NostrService) { }

  async ngOnInit(): Promise<void> {
    this.nostr.isConnected().subscribe(connected => {
      if (connected) {
        this.nostr.listTopics().then((topics: Topic[]) => {
          this.topics = topics
        });
      }
    });
  }

}
