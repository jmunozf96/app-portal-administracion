import { Component, OnInit } from '@angular/core';
import {finalize, map, tap} from "rxjs";
import {Post} from "../../../modules/posts/models/Post.model";
import {PostHttpService} from "../../../core/services/post-http.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  isLoading: boolean = false;
  posts: Post[] = [];

  constructor(protected postHttpService: PostHttpService) {
  }

  ngOnInit() {
    this.inicializarPosts().subscribe();
  }

  inicializarPosts() {
    return this.postHttpService.getAll()
      .pipe(
        map(next => {
          next.posts = next.posts.map(src => Post.instanceNewObject(src))
          return next;
        }),
        tap(next => {
          if (next) this.posts = next.posts;
        }),
        finalize(() => this.isLoading = false)
      );
  }
}
