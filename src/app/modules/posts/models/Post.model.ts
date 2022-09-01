import {IPost} from "../interfaces/post.interface";

export class Post implements IPost {
  id: number | null;
  title: string;
  body: string;
  userId: number | null;
  tags: string[];
  reactions: number;

  static instanceNewObject(data: any) {
    const post = new Post();
    post.id = data['id'] ?? post.id;
    post.title = data['title'] ?? post.title;
    post.body = data['body'] ?? post.body;
    post.userId = data['userId'] ?? post.userId;
    post.tags = data['tags'] ?? post.tags;
    post.reactions = data['reactions'] ?? post.reactions;
    return post;
  }

  constructor() {
    this.id = null;
    this.title = '';
    this.body = '';
    this.userId = null;
    this.tags = [];
    this.reactions = 0;
  }
}
