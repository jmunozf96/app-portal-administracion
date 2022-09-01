import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {AuthService} from "./modules/auth/services/auth.service";
import {APP_INIT} from "./core/config/app-init.config";
import {INTERCEPTOR_CONFIG} from "./core/config/interceptor.config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    APP_INIT,
    INTERCEPTOR_CONFIG,
    MessageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
