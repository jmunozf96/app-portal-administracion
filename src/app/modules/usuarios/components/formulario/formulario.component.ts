import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../../../auth/models/Usuario.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Input() usuario: Usuario | undefined;
  @Input('esNuevo') isNew: boolean = true;
  declare form: FormGroup;

  @Output('onDataUser') dataUsuario: EventEmitter<Usuario>;

  constructor(private fb: FormBuilder) {
    this.dataUsuario = new EventEmitter<Usuario>();
  }

  ngOnInit(): void {
    if (this.isNew) this.usuario = new Usuario();
    console.log(this.isNew, this.usuario)
    if (this.usuario) {
      this.form = this.usuario.formBuilder(this.fb);
    }
  }

  procesar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Formulario inválido');
    }
    this.usuario = Usuario.instanceNewObject(this.form.value);
    this.dataUsuario.emit(this.usuario);
    this.form.reset();
  }

}
