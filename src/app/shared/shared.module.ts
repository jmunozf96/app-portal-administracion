import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from "./shared.routing.module";
import {LayoutComponent} from "./components/layout.component";
import {SharedModule as SharedModulePrimeng} from "primeng/api";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SharedModulePrimeng,
    MenubarModule
  ]
})
export class SharedModule {
}
