import {Component} from '@angular/core';
import {User} from "../../../auth/models/Usuario.model";
import {CrudModalComponent} from "../../../../core/components/base/crud-modal.component";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent extends CrudModalComponent<User> {

  override newItem(): User {
    return new User();
  }

  override instanceNewObject(data: any): User {
    return User.instanceNewObject(data);
  }

}
