import {Pagination} from "../../../core/interfaces/pagination.interface";
import {Usuario} from "../../auth/models/Usuario.model";

export interface IUsuarioPaginate extends Pagination {
  users: Usuario[];
}
