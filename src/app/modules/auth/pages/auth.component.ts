import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private authService: AuthService,
              private router: Router) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-lock',
        routerLink: 'login'
      },
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-book',
        routerLink: 'posts'
      }
    ]
  }
}
