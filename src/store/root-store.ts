import { counterStore } from "./counterStore";
import { userStore } from "./userStore";

class RootStore {
  counterStore = counterStore;
  userStore = userStore;
}

export { RootStore };
