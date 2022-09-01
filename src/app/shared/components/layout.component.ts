import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../modules/auth/services/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  items: MenuItem[] = [];

  constructor(private authService: AuthService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    const user = this.authService.currentUserValue;
    if (user) {
      if (user.isAdmin) {
        this.items = [
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-user',
            routerLink: '/usuarios'
          },
          {
            label: 'Posts',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/posts'
          },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off',
            command: (() => {
              this.authService.logout();
            })
          }
        ]
      } else {
        this.items = [
          {
            label: 'Posts',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/posts'
          },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off',
            command: (() => {
              this.authService.logout();
            })
          }
        ];
      }
    }
  }

}
