import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Mobx
import { spy } from "mobx";
import { RootStoreContext } from "./store/root-store-context";
import { RootStore } from "./store/root-store";

spy((ev) => {
  if (ev.type === "action") {
    console.log(ev);
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootStoreContext.Provider value={new RootStore()}>
    <App />
  </RootStoreContext.Provider>
);
