import {FormBuilder, FormGroup} from "@angular/forms";

export type TipoUsuario = {
  username: string;
  password: string;
}

export type ModelBaseToCRUD = {
  formBuilder(fb: FormBuilder): FormGroup;
}

