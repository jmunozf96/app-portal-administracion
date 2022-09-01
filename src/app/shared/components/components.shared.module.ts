import {NgModule} from "@angular/core";
import {AllPostsComponent} from "./all-posts.component.ts/all-posts.component";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";

@NgModule({
  imports: [
    CarouselModule,
    ButtonModule,
    PanelModule,
    MenuModule
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
