import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioHttpService} from "../../../../core/services/usuario-http.service";
import {Usuario} from "../../../auth/models/Usuario.model";
import {finalize, map} from "rxjs";
import {Table} from "primeng/table";
import {ToastManagerService} from "../../../../core/facades/toast-manager.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @ViewChild('myTable', {static: false}) table!: Table;
  usuarios: Usuario[] = [];
  isLoading: boolean;
  showForm: boolean = false;

  isSave: boolean = true;
  usuario: Usuario | undefined;

  constructor(private usuarioHttpService: UsuarioHttpService,
              private toastr: ToastManagerService,
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

  nuevo() {
    this.showForm = true;
  }

  onSave(usuario: Usuario) {
    this.showForm = false;
    this.usuarioHttpService.guardar(usuario).subscribe(() => {
      this.toastr.success('Usuario agregado con éxito');
      this.getAllUsers();
    })
  }

  onActiveUser(usuario: Usuario){
    this.showForm = true;
    this.usuario = usuario;
    this.isSave = false;
  }

  onUpdate(usuario: Usuario) {
    this.showForm = false;
    this.usuarioHttpService.actualizar(usuario).subscribe(() => {
      this.toastr.success('Usuario actualizado con éxito');
      this.getAllUsers();
    })
  }
}
