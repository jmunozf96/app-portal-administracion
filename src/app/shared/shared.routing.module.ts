import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./components/layout.component";
import {NgModule} from "@angular/core";
import {IsAdminGuard} from "../core/guards/is-admin.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./menu-principal/menu-principal.module').then((m) => m.MenuPrincipalModule),
      },
      {
        path: 'usuarios',
        canActivate: [IsAdminGuard],
        loadChildren: () =>
          import('../modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('../modules/posts/posts.module').then((m) => m.PostsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
