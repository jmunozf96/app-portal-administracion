import {Injectable} from "@angular/core";
import {ApiHttpService} from "./api-http.service";
import {Pagination} from "../../interfaces/pagination.interface";
import {ModelBase} from "../../types/types";

@Injectable()
export abstract class ApiCrudHttpService<TModel extends ModelBase, TModelPaginate extends Pagination> extends ApiHttpService {

  abstract get serviceName(): string;

  getAll() {
    const url = `${this.service}/${this.serviceName}`;
    return this.http.get<TModelPaginate>(url);
  }

  guardar(data: TModel) {
    const url = `${this.service}/${this.serviceName}/add`;
    return this.http.post<any>(url, data);
  }

  actualizar(data: TModel) {
    const url = `${this.service}/${this.serviceName}/${data.id}`;
    return this.http.put<void>(url, data);
  }

  eliminar(data: TModel) {
    const url = `${this.service}/${this.serviceName}/${data.id}`;
    return this.http.delete<void>(url);
  }

}
