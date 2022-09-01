import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {ModelBaseToCRUD} from "../../types/types";
import {ConfirmationService} from "primeng/api";
import {ToastManagerService} from "../../facades/toast-manager.service";
import {Observable} from "rxjs";
import {Pagination} from "../../interfaces/pagination.interface";

@Component({template: ''})
export abstract class TableBaseComponent<TModel extends ModelBaseToCRUD> implements OnInit {
  datas: TModel[] = [];
  isLoading: boolean;
  showForm: boolean = false;

  isSave: boolean = true;
  data: TModel | undefined;

  constructor(protected confirmationService: ConfirmationService,
              protected toastr: ToastManagerService,
              protected chref: ChangeDetectorRef) {
    this.isLoading = false;
  }

  abstract getAllHttp(): Observable<Pagination>;
  abstract onSaveHttp(data: TModel): Observable<TModel>;
  abstract onUpdateHttp(data: TModel): Observable<void>;
  abstract onDeleteHttp(data: TModel): Observable<void>;

  ngOnInit(): void {
    this.chref.detectChanges();
  }

  getAllData() {
    this.isLoading = true;
    this.getAllHttp().subscribe()
  }

  onNew() {
    this.showForm = true;
    this.data = undefined;
    this.isSave = true;
  }

  onSave(data: TModel) {
    this.showForm = false;
    this.onSaveHttp(data).subscribe(() => {
      this.toastr.success('Registro agregado con éxito');
      this.getAllData();
    })
  }

  onActiveUser(data: TModel) {
    this.showForm = true;
    this.data = data;
    this.isSave = false;
  }

  onUpdate(data: TModel) {
    this.showForm = false;
    this.onUpdateHttp(data).subscribe(() => {
      this.toastr.success('Registro actualizado con éxito');
      this.getAllData();
    })
  }

  onDelete(data: TModel) {
    this.confirmationService.confirm({
      message: 'Estas seguro de eliminar este registro?',
      header: 'Eliminar',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.onDeleteHttp(data).subscribe(() => {
          this.toastr.success('Registro eliminado con éxito');
          this.getAllData();
        })
      },
    });
  }
}
