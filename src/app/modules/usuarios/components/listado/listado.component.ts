import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioHttpService} from "../../../../core/services/usuario-http.service";
import {Usuario} from "../../../auth/models/Usuario.model";
import {finalize, map} from "rxjs";
import {Pagination} from "../../../../core/interfaces/pagination.interface";
import {Table} from "primeng/table";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @ViewChild('myTable', { static: false }) table!: Table;
  usuarios: Usuario[] = [];
  isLoading: boolean;

  constructor(private usuarioHttpService: UsuarioHttpService,
              private chref: ChangeDetectorRef) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.chref.detectChanges();
  }

  getAllUsers() {
    this.isLoading = true;
    this.usuarioHttpService.getAll()
      .pipe(
        map(next => {
          next.users = next.users.map(src => Usuario.instanceNewObject(src))
          return next;
        }),
        finalize(() => this.isLoading = false)
      )
      .subscribe(next => {
        if (next) {
          this.usuarios = next.users;
        }
      })
  }
}
