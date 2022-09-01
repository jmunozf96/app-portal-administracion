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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
