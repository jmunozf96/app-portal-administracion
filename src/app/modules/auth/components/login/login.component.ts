import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ToastManagerService} from "../../../../core/facades/toast-manager.service";
import {Administrador} from "../../../../core/helpers/const.helper";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  returnUrl: string = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastr: ToastManagerService,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      expiresInMins: [60]
    })
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] ?? '/';
  }

  get isLoading$() {
    return this.authService.isLoading$;
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Formulario inválido');
    }
    const {username, password} = Administrador;
    this.authService.login(username, password)
      .subscribe(next => {
      if (next) {
        this.form.reset();
        this.router.navigate([this.returnUrl]);
      } else this.toastr.error('Usuario no se encuentra registrado');
    })
  }

}
