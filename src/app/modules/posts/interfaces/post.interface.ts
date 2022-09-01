import {Pagination} from "../../../core/interfaces/pagination.interface";
import {Post} from "../models/Post.model";

export interface IPost {
  id: number | null;
  title: string;
  body: string;
  userId: number | null;
  tags: string[];
  reactions: number;
}

export interface IPostPaginate extends Pagination {
  posts: Post[];
}
