import {Component} from '@angular/core';
import {CrudModalComponent} from "../../../../core/components/base/crud-modal.component";
import {Post} from "../../models/Post.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent extends CrudModalComponent<Post> {

  override newItem(): Post {
    return new Post();
  }

  override instanceNewObject(data: any): Post {
    return Post.instanceNewObject(data);
  }

}
