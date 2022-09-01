import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./pages/auth.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'login', component: AuthComponent,},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
