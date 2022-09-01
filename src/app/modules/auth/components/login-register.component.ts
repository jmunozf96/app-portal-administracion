import {Component} from "@angular/core";

@Component({
  template: `
    <div class="col-12">
      <div class="grid">
        <div class="col-12 md:col-5">
          <div class="p-fluid">
            <app-login></app-login>
          </div>
        </div>
        <div class="col-12 md:col-2">
          <p-divider layout="vertical">
            <b>OR</b>
          </p-divider>
        </div>
        <div class="col-12 md:col-5">
          <div class="p-fluid">
            <app-register></app-register>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginRegisterComponent {

}
