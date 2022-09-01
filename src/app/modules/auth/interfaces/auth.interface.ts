export interface IAuth {
  token: string;
}

export interface IUser {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  password: string;
}
