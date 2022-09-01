import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./components/layout.component";
import {NgModule} from "@angular/core";

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
