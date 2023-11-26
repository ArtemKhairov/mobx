import { makeAutoObservable } from "mobx";
import { makeLoggable } from "mobx-log";

class CounterStore {
  private _count = 0;

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
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
