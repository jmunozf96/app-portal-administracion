import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModelBaseToCRUD} from "../../types/types";

@Component({template: ''})
export abstract class CrudModalComponent<TModel extends ModelBaseToCRUD> implements OnInit {
  @Input() data: TModel | undefined;
  @Input('esNuevo') isNew: boolean = true;
  declare form: FormGroup;

  @Output('onDataUser') dataUsuario: EventEmitter<TModel>;

  constructor(protected fb: FormBuilder) {
    this.dataUsuario = new EventEmitter<TModel>();
  }

  abstract newItem(): TModel;

  abstract instanceNewObject(data: any): TModel;

  ngOnInit(): void {
    if (this.isNew) this.data = this.newItem();
    if (this.data) {
      this.form = this.data.formBuilder(this.fb);
    }
  }

  procesar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Formulario inválido');
    }
    this.data = this.instanceNewObject(this.form.value);
    this.dataUsuario.emit(this.data);
    this.form.reset();
  }
}
