import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../../../auth/models/Usuario.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CrudModalComponent} from "../../../../core/components/base/crud-modal.component";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent extends CrudModalComponent<Usuario> {

  override newItem(): Usuario {
    return new Usuario();
  }

  override instanceNewObject(data: any): Usuario {
    return Usuario.instanceNewObject(data);
  }

}
