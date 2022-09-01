import {FormBuilder, FormGroup} from "@angular/forms";

export type TipoUsuario = {
  username: string;
  password: string;
}

export type ModelBase = {
  id: number | null;
}

export type ModelBaseToCRUD = ModelBase & {
  formBuilder(fb: FormBuilder): FormGroup;
}

