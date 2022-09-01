import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ToastManagerService} from "../../../../core/facades/toast-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastr: ToastManagerService) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      expiresInMins: [60]
    })
  }

  ngOnInit(): void {
  }

  get isLoading$() {
    return this.authService.isLoading$;
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Formulario inválido');
    }
    const {username, password} = this.form.value;
    this.authService.login(username, password).subscribe(next => {
      if (next) {
        console.log(next)
      } else this.toastr.error('Usuario no se encuentra registrado');
    })
  }

}
