import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../modules/auth/services/auth.service";
import {TipoUsuario} from "../../core/enums/tipo-usuario.enum";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const user = this.authService.currentUserValue;
    if (user && user.tipoUsuario == TipoUsuario.ADMINISTRADOR) {
      this.items = [
        {
          label: 'Usuarios',
          icon: 'pi pi-fw pi-user',
        },
        {
          label: 'Posts',
          icon: 'pi pi-fw pi-pencil',
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          command: (() => {
            this.authService.logout();
          })
        }
      ]
    }
  }

}
