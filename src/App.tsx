import "./App.css";
// Mobx
import { observer } from "mobx-react-lite";
// Components
import Counter from "./components/counter";
import User from "./components/user";

function App() {
  return (
    <>
      <Counter />
      <User />
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default observer(App);
