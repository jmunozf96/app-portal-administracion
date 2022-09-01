import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthComponent} from "./pages/auth.component";
import {AuthRoutingModule} from "./auth.routing.module";
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MenubarModule,
    SharedModule,
    TabViewModule,
    CardModule,
    InputTextModule,
    DividerModule,
    ButtonModule
  ]
})
export class AuthModule {
}
