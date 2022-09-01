import {Pagination} from "../../../core/interfaces/pagination.interface";
import {User} from "../../auth/models/Usuario.model";

export interface IUsuarioPaginate extends Pagination {
  users: User[];
}
