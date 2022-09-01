import {NgModule} from "@angular/core";
import {AllPostsComponent} from "./all-posts.component.ts/all-posts.component";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {ScrollTopModule} from "primeng/scrolltop";
import {ChipModule} from "primeng/chip";
import {DividerModule} from "primeng/divider";
import {BadgeModule} from "primeng/badge";

@NgModule({
  imports: [
    CarouselModule,
    ButtonModule,
    PanelModule,
    MenuModule,
    ScrollTopModule,
    ChipModule,
    DividerModule,
    BadgeModule
  ],
  exports: [
    AllPostsComponent
  ],
  declarations: [
    AllPostsComponent
  ]
})
export class ComponentsSharedModule {
}
