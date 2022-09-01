import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastManagerService {

  constructor(private messageService: MessageService) {
  }

  success(detail: string) {
    this.messageService.add({severity: 'success', summary: 'Acción realizada con éxito', detail});
  }

  info(detail: string) {
    this.messageService.add({severity: 'info', summary: 'Advertencia', detail});
  }

  error(detail: string) {
    this.messageService.add({severity: 'error', summary: 'Error', detail});
  }

  clear() {
    this.messageService.clear();
  }
}
