import { makeAutoObservable } from "mobx";
import { makeLoggable } from "mobx-log";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { getUsers } from "../api/getUsers";

type TUserLogin = {
  uuid: string;
  username: string;
  password: string;
  md5: string;
  shal: string;
  registred: string;
};

type TUserAdress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  phone: string;
  website: string;
  login: TUserLogin;
  company: TCompany;
  adress: TUserAdress;
};

class UserStore {
  users?: IPromiseBasedObservable<TUser[]>;

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
  }

  getUsersAction = () => {
    this.users = fromPromise(getUsers());
  };
}

export const userStore = new UserStore();
