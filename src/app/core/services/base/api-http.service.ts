import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export abstract class ApiHttpService {

  constructor(protected httpClient: HttpClient) {
  }

  get http() {
    return this.httpClient;
  }

  get service() {
    return `${environment.api}`;
  }
}
