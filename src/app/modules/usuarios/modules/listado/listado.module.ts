import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListadoComponent} from "../../components/listado/listado.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListadoComponent,
      }
    ]),
    TableModule,
    ButtonModule,
    ToastModule
  ]
})
export class ListadoModule {
}
