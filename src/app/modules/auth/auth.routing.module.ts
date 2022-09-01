import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./pages/auth.component";
import {NgModule} from "@angular/core";
import {AllPostsComponent} from "../../shared/components/all-posts.component.ts/all-posts.component";
import {LoginRegisterComponent} from "./components/login-register.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginRegisterComponent},
      {path: 'posts', component: AllPostsComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
