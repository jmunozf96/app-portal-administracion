import {ChangeDetectorRef, Component} from '@angular/core';
import {UsuarioHttpService} from "../../../../core/services/usuario-http.service";
import {User} from "../../../auth/models/Usuario.model";
import {finalize, map, Observable, tap} from "rxjs";
import {ToastManagerService} from "../../../../core/facades/toast-manager.service";
import {ConfirmationService} from "primeng/api";
import {TableBaseComponent} from "../../../../core/components/base/table-base.component";
import {IUsuarioPaginate} from "../../interfaces/usuarios.interface";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [
    ConfirmationService
  ]
})
export class ListadoComponent extends TableBaseComponent<User, IUsuarioPaginate> {

  constructor(protected usuarioHttpService: UsuarioHttpService,
              protected override confirmationService: ConfirmationService,
              protected override toastr: ToastManagerService,
              protected override chref: ChangeDetectorRef) {
    super(usuarioHttpService, confirmationService, toastr, chref);
  }

  override getAllHttp(): Observable<IUsuarioPaginate> {
    return this.usuarioHttpService.getAll()
      .pipe(
        map(next => {
          next.users = next.users.map(src => User.instanceNewObject(src))
          return next;
        }),
        tap(next => {
          if (next) this.datas = next.users;
        }),
        finalize(() => this.isLoading = false)
      );
  }

}
