import { makeAutoObservable } from "mobx";

class CounterStore {
  private _count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getCount = () => {
    return this._count;
  };

  increment = () => {
    this._count++;
  };

  decrement = () => {
    this._count--;
  };
}

export const counterStore = new CounterStore();
