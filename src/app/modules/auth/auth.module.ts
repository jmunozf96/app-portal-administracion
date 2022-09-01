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
import {ReactiveFormsModule} from "@angular/forms";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ToastModule} from "primeng/toast";
import {ComponentsSharedModule} from "../../shared/components/components.shared.module";

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
        ButtonModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        ToastModule,
        ComponentsSharedModule
    ]
})
export class AuthModule {
}
