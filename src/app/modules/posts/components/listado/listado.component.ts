import {ChangeDetectorRef, Component} from '@angular/core';
import {finalize, map, Observable, tap} from "rxjs";
import {ConfirmationService} from "primeng/api";
import {TableBaseComponent} from "../../../../core/components/base/table-base.component";
import {Post} from "../../models/Post.model";
import {ToastManagerService} from "../../../../core/facades/toast-manager.service";
import {PostHttpService} from "../../../../core/services/post-http.service";
import {IPostPaginate} from "../../interfaces/post.interface";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [
    ConfirmationService
  ]
})
export class ListadoComponent extends TableBaseComponent<Post, IPostPaginate> {

  constructor(protected postHttpService: PostHttpService,
              protected override confirmationService: ConfirmationService,
              protected override toastr: ToastManagerService,
              protected override chref: ChangeDetectorRef) {
    super(postHttpService, confirmationService, toastr, chref);
  }

  override getAllHttp(): Observable<IPostPaginate> {
    return this.postHttpService.getAll()
      .pipe(
        map(next => {
          next.posts = next.posts.map(src => Post.instanceNewObject(src))
          return next;
        }),
        tap(next => {
          if (next) this.datas = next.posts;
        }),
        finalize(() => this.isLoading = false)
      );
  }
}
