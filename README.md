# nostrdd

A Reddit clone built using Nostr, a decentralized event system.

This project was created to demonstrate how Nostr can be used to build a decentralized, reddit like, application. It allows users to create and join topics, post content, and reply to other users' posts.

## Features

- Creating and viewing topics (comparable to subreddits)
- Posting to topics (threads)
- Replying to other users posts (comments)
- Decentralized architecture using nostr
- Open-source code

## Technologies

- Angular
- TypeScript
- Nostr (using nostr-tools)
- HTML
- CSS

## Getting Started

To get started, clone this repository and run `npm install` to install the necessary dependencies.
Then, run `npm start` to start the development server. You can access the application at `http://localhost:4200`.

## Usage of NIPS

This application uses Nostr's event types to represent data and interactions between users. The event types used by the application are documented in Nostr Improvement Proposal 28 (NIP-28), which defines a standard set of event types for decentralized social networking.

The application uses the following event types:

- Kind 40: Topic Creation. This event is used when a user creates a new topic. The event's content includes the topic's name, description, and picture.
- Kind 42: Post Creation and Reply. This event is used when a user creates a new post or replies to an existing post. The event's content includes the post's content and metadata, such as the post's title and author. Posts are associated with a particular topic using the event's tags field. Replies are associated with the post being replied to using the event's tags field.

## License

This project is licensed under the MIT License.
