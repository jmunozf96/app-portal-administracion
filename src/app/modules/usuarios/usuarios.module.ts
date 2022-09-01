import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from "./pages/index.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: IndexComponent,
      children: [
        {
          path: 'listado',
          loadChildren: () => import('./modules/listado/listado.module').then((m) => m.ListadoModule)
        },
        {path: '', redirectTo: 'listado', pathMatch: 'full'}
      ]
    }])
  ]
})
export class UsuariosModule {
}
