import {Injectable} from "@angular/core";
import {ApiCrudHttpService} from "./base/api-crud-http.service";
import {IPost, IPostPaginate} from "../../modules/posts/interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostHttpService extends ApiCrudHttpService<IPost, IPostPaginate>{

  override get serviceName(): string {
    return "posts";
  }

}
