import { Injectable } from '@angular/core';
import { Event, Filter, Relay, relayInit, EventTemplate, finishEvent } from 'nostr-tools';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post';
import { Topic } from '../models/topic';
import { KeyManagementService } from './key.service';

@Injectable({
  providedIn: 'root'
})
export class NostrService {
  private relay: Relay;
  private connected = new BehaviorSubject<boolean>(false);

  private static NOSTRDD_TAG = "nostrdd_test";

  constructor(private keyManagementService: KeyManagementService) {
    this.connectRelay('wss://relay.damus.io')
  }

  isConnected(): Observable<boolean> {
    return this.connected.asObservable();
  }

  async connectRelay(url: string) {
    await this.connect(url)
  }

  private async connect(url: string) {
    if (this.relay) {
      await this.relay.close()
    }

    this.relay = relayInit(url)

    this.relay.on('connect', () => {
      console.log('Connected to relay at', url)
      this.connected.next(true);
    })

    this.relay.on('disconnect', () => {
      console.log('Disconnected from relay at', url)
      this.connected.next(false);
    })

    this.relay.on('error', (reason: any) => {
      console.log('Error connecting to relay at', url)
      console.log(reason)
      this.connected.next(false);
    })

    await this.relay.connect();
  }

  createTopic(name: string, about: string, picture: string) {
    const content = {
      name,
      about,
      picture
    }

    const event: EventTemplate = {
      kind: 40,
      created_at: Math.round(Date.now() / 1000),
      tags: [['t', NostrService.NOSTRDD_TAG]],
      content: JSON.stringify(content)
    }

    const signedEvent = finishEvent(event, this.keyManagementService.getPrivKey())

    let pub = this.relay.publish(signedEvent)
    pub.on('ok', () => {
      console.log('topic event sucessfully submitted')
    })
    pub.on('failed', (reason: any) => {
      console.log('topic event failed')
      console.log(reason)
    })
  }

  async listTopics(): Promise<Topic[]> {
    const filter: Filter = { 
      kinds: [40], 
      '#t': [NostrService.NOSTRDD_TAG] 
    };

    const events: Event[] = await this.relay.list([filter]);

    return events.map((event: Event) => {
      const topic: Topic = JSON.parse(event.content)
      topic.id = event.id
      return topic;
    });
  }

  async createMessage(topicId: string, title: string, message: string, parentId?: string): Promise<void> {
    
    const content = {
      title,
      message
    }

    const event: EventTemplate = {
      kind: 42,
      created_at: Math.round(Date.now() / 1000),
      tags: [
        ['t', NostrService.NOSTRDD_TAG],
        ['e', topicId, this.relay.url, parentId ? 'reply' : 'root']
      ],
      content: JSON.stringify(content)
    }

    if(parentId) {
      event.tags.push(['p', parentId, this.relay.url])
    }

    const signedEvent = finishEvent(event, this.keyManagementService.getPrivKey())

    const pub = this.relay.publish(signedEvent)
    pub.on('ok', () => {
      console.log('message event sucessfully submitted')
    })
    pub.on('failed', (reason: any) => {
      console.log('message event failed')
      console.log(reason)
    })
  }

  async listPosts(topicId: string): Promise<Post[]> {
    const filter: Filter = {
      kinds: [42],
      '#t': [NostrService.NOSTRDD_TAG],
      '#e': [topicId] //TODO filter by 'root' Tag
    };

    const events: Event[] = await this.relay.list([filter]);
    console.log(events)

    return events.map((event: Event) => {
      const post: Post = JSON.parse(event.content);
      post.id = event.id;
      return post;
    });
  }


}
