import {IPost} from "../interfaces/post.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

export class Post implements IPost {
  id: number | null;
  title: string;
  body: string;
  userId: number | null;
  tags: string[];
  reactions: number;

  get tagsLabel() {
    return this.tags.join(',')
  }

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

  formBuilder(fb: FormBuilder): FormGroup {
    return fb.group({
      id: [this.id],
      title: [this.title],
      body: [this.body],
      userId: [this.userId],
      tags: [{value: this.tags, disabled: true}],
      reactions: [{value: this.reactions, disabled: true}],
    })
  }
}
