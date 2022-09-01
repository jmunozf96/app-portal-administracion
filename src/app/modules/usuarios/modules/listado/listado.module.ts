import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListadoComponent} from "../../components/listado/listado.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {FormularioComponent} from "../../components/formulario/formulario.component";
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  declarations: [
    ListadoComponent,
    FormularioComponent
  ],
  exports: [
    FormularioComponent
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
    ToastModule,
    DialogModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule
  ]
})
export class ListadoModule {
}
