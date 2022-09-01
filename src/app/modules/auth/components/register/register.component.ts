import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../models/Usuario.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../services/register.service";
import {ToastManagerService} from "../../../../core/facades/toast-manager.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    RegisterService
  ]
})
export class RegisterComponent implements OnInit {
  declare usuario: Usuario;
  declare form: FormGroup;

  constructor(private fb: FormBuilder,
              private registroService: RegisterService,
              private toastr: ToastManagerService) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.form = this.usuario.formBuilder(this.fb);
  }

  get isLoading$() {
    return this.registroService.isLoading$;
  }

  registrar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Formulario inválido');
    }
    const usuario = Usuario.instanceNewObject(this.form.value);
    this.registroService.registrarUsuario(usuario).subscribe(() => {
      this.form.reset();
      this.toastr.success('Usuario agregado con éxito');
    })
  }
}
